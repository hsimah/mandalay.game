import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import * as featureActions from './actions';
import { Card } from '../../models/card';

const suits: string[] = [
    'Clubs',
    'Diamonds',
    'Hearts',
    'Spades'
];

const buildDeck = (cards: Card[]): Card[] => {
    const deck: Card[] = [];
    suits.forEach(suit => cards.forEach(card => deck.push({
        suit,
        rank: card.rank,
        value: card.value
    })));
    return deck;
};

@Injectable()
export class AppStoreEffects {
    constructor(private dataService: DataService, private actions$: Actions) { }

    @Effect()
    requestCardEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.RequestCardsAction>(
            featureActions.ActionTypes.REQUEST_CARDS
        ),
        startWith(new featureActions.RequestCardsAction()),
        switchMap(action => this.dataService.getCards()
            .pipe(
                map(cards => new featureActions.ReceiveCardsAction({ cards: buildDeck(cards) })),
                catchError(error => observableOf(new featureActions.HandleErrorAction({ error })))
            )
        )
    );
}