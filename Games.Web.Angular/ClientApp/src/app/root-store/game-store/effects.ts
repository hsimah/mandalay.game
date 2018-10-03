import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { shuffle } from 'lodash';

import * as featureActions from './actions';

import { State } from '../root-state';
import { Player } from '../../models/player';
import { Card } from '../../models/card';
import { Round } from '../../models/round';

@Injectable()
export class GameStoreEffects {
    constructor(private actions$: Actions, private store$: Store<State>) { }

    private countCards(cards: Card[], wildcard: Card) {
        return cards.reduce((total, current) => {
            return total += current.suit === wildcard.suit ? current.value * 2 : current.value;
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
        ofType<featureActions.SetPlayerCountAction>(
            featureActions.ActionTypes.SET_PLAYER_COUNT
        ),
        map(action => new featureActions.SetPlayersAction({
            players: this.generatePlayers(action.payload.playerCount)
        }))
    )

    // @Effect()
    // initRound$: Observable<Action> = this.actions$.pipe(
    //     ofType<featureActions.InitRoundAction>(featureActions.ActionTypes.INIT_ROUND),
    //     withLatestFrom(this.store$),
    //     map(([action, store]) => {

    //     })
    // )

    @Effect()
    startGameEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.StartGameAction>(featureActions.ActionTypes.START_GAME),
        withLatestFrom(this.store$),
        map(([action, store]) => {
            const shuffled = shuffle(store.app.deck);
            const wildcard = shuffled.splice(Math.floor(Math.random() * shuffled.length), 1).pop();
            return new featureActions.InitRoundAction({
                deck: shuffled,
                wildcard: wildcard
            });
        })
    );

    @Effect()
    dealHandEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.DealCardAction>(featureActions.ActionTypes.DEAL_CARD),
        withLatestFrom(this.store$),
        map(([action, store]) => {
            const dealtPlayers: Player[] = action.payload.players.map(p => {
                if (p.hand.length < 5) {
                    const card = store.game.round.deck.shift();
                    p.hand.push(card);
                    p.score = this.countCards(p.hand, store.game.round.wildcard);
                }
                return {
                    ...p
                };
            });
            return new featureActions.DealCardAction({
                deck: [],
                players: dealtPlayers,
                deal: 1
            });
        })
    );
}