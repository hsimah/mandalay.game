import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Card } from '../../models/card';
import { State } from './state';

const getError = (state: State): any => state.error;
const getIsLoaded = (state: State): boolean => state.deckLoaded;
const getDeck = (state: State): Card[] => state.deck;

export const selectAppState: MemoizedSelector<object, State> = createFeatureSelector<State>('app');
export const selectAppError: MemoizedSelector<object, any> = createSelector(
    selectAppState,
    getError
);
export const selectAppLoaded: MemoizedSelector<object, boolean> = createSelector(selectAppState, getIsLoaded);
export const selectAppDeck: MemoizedSelector<object, Card[]> = createSelector(selectAppState, getDeck);