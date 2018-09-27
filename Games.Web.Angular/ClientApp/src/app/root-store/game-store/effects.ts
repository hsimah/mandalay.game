import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { shuffle } from 'lodash';

import * as featureActions from './actions';

import { State } from '../root-state';
import { Player } from '../../models/player';
import { Card } from '../../models/card';

@Injectable()
export class GameStoreEffects {
    constructor(private actions$: Actions, private store$: Store<State>) { }

    private countCards(cards: Card[], wildcard: Card) {
        return cards.reduce((total, current) => {
            return total += current.suit === wildcard.suit ? current.value * 2 : current.value;
        }, 0);
    }

    @Effect()
    startGameEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.StartGameAction>(featureActions.ActionTypes.START_GAME),
        map(action => {
            const shuffled = shuffle(action.payload.deck);
            const wildcard = shuffled.splice(Math.floor(Math.random() * shuffled.length), 1).pop();
            return new featureActions.StartGameAction({
                deal: 0,
                deck: shuffled,
                wildcard
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