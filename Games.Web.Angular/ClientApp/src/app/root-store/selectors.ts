import { createSelector, MemoizedSelector } from '@ngrx/store';
import { AppStoreSelectors } from './app-store';
import { GameStoreSelectors } from './game-store';
import { Card } from '../models/card';
import { Player } from '../models/player';
import { State } from './app-store/state';

export const selectError: MemoizedSelector<object, string> = createSelector(
    AppStoreSelectors.selectAppError,
    (appError: string) => appError
);

export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
    AppStoreSelectors.selectAppLoaded,
    (appLoaded: boolean) => appLoaded
);

export const selectAppState: MemoizedSelector<object, State> = AppStoreSelectors.selectAppState;
export const selectAppDeck: MemoizedSelector<object, Card[]> = AppStoreSelectors.selectAppDeck;

export const selectGameDeck: MemoizedSelector<object, Card[]> = GameStoreSelectors.selectGameDeck;
export const selectGamePlayers: MemoizedSelector<object, Player[]> = GameStoreSelectors.selectGamePlayers;
export const selectGameWildcard: MemoizedSelector<object, Card> = GameStoreSelectors.selectGameWildcard;
export const selectGameWinner: MemoizedSelector<object, Player> = GameStoreSelectors.selectGameWinner;
export const selectGamePlayerCount: MemoizedSelector<object, number> = GameStoreSelectors.selectGamePlayerCount;