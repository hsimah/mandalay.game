import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { shuffle, maxBy } from 'lodash';
import * as GameStoreActions from './actions';
import { AppStoreActions } from '../app-store';
import { State } from '../root-state';
import { Player } from '../../models/player';
import { Card } from '../../models/card';
import { Round } from '../../models/round';

@Injectable()
export class GameStoreEffects {
    constructor(private actions$: Actions, private store$: Store<State>) { }

    private countCards(cards: Card[], wildcard: Card) {
        return cards.reduce((total, current) => {
            const samesame = current.suit === wildcard.suit;
            return total += samesame ? current.value * 2 : current.value;
        }, 0);
    }

    private generatePlayer(value: any, index: number): Player {
        return {
            name: `Player ${index + 1}`,
            hand: [] as Card[],
            score: 0
        };
    }

    private generatePlayers(count: number): Player[] {
        return Array.from(Array(count), this.generatePlayer);
    }

    @Effect()
    setPlayersEffect$: Observable<Action> = this.actions$.pipe(
        ofType<GameStoreActions.SetPlayerCountAction>(
            GameStoreActions.ActionTypes.SET_PLAYER_COUNT
        ),
        map(action => new GameStoreActions.SetPlayersAction(this.generatePlayers(action.playerCount)))
    )

    @Effect()
    startGameEffect$: Observable<Action> = this.actions$.pipe(
        ofType<GameStoreActions.StartGameAction>(GameStoreActions.ActionTypes.START_GAME),
        withLatestFrom(this.store$),
        map(([action, store]) => {
            const shuffled = shuffle(store.app.deck);
            const wildcard = shuffled.splice(Math.floor(Math.random() * shuffled.length), 1).pop();
            return {
                deck: shuffled,
                wildcard: wildcard
            };
        }),
        switchMap(round => [
            new GameStoreActions.InitRoundAction(round),
            new GameStoreActions.DealCardAction(0)
        ])
    );

    @Effect()
    dealHandEffect$: Observable<Action> = this.actions$.pipe(
        ofType<GameStoreActions.DealCardAction>(GameStoreActions.ActionTypes.DEAL_CARD),
        withLatestFrom(this.store$),
        map(([action, store]) => {
            const round: Round = Object.assign({}, store.game.round);
            const dealtPlayers: Player[] = round.players.map(p => {
                if (p.hand.length < 5) {
                    const card = round.deck.shift();
                    p.hand.push(card);
                    p.score = this.countCards(p.hand, round.wildcard);
                }
                return {
                    ...p
                };
            });
            return {
                ...round,
                players: dealtPlayers,
                deck: round.deck,
                cardsDealt: action.deal + 1
            };
        }),
        switchMap(round => [
            new GameStoreActions.UpdateHandAction(round),
            round.cardsDealt === 5 ? new GameStoreActions.FinishGameAction(round) : new GameStoreActions.DealCardAction(round.cardsDealt)
        ])
    );

    @Effect()
    setWinnerEffect$: Observable<Action> = this.actions$.pipe(
        ofType<GameStoreActions.FinishGameAction>(GameStoreActions.ActionTypes.FINISH_GAME),
        map(action => ({
            ...action.round,
            winner: maxBy(action.round.players, 'score')
        })),
        switchMap(round => [
            new GameStoreActions.SetWinnerAction(round.winner),
            new AppStoreActions.SendRoundAction(round)
        ])
    );
}