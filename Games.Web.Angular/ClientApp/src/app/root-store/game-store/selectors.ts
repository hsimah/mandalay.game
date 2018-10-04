import {
    createFeatureSelector,
    MemoizedSelector,
    createSelector
} from '@ngrx/store';

import { State } from './state';
import { Card } from '../../models/card';
import { Player } from '../../models/player';

const getPlayers = (state: State): Player[] => state.round.players;
const getWildcard = (state: State): Card => state.round.wildcard;
const getWinner = (state: State): Player => state.round.winner;
const getPlayerCount = (state: State): number => state.playerCount;

export const selectGameState: MemoizedSelector<object, State> = createFeatureSelector<State>('game');

export const selectGamePlayers: MemoizedSelector<object, Player[]> = createSelector(
    selectGameState,
    getPlayers
);

export const selectGameWildcard: MemoizedSelector<object, Card> = createSelector(
    selectGameState,
    getWildcard
);

export const selectGameWinner: MemoizedSelector<object, Player> = createSelector(
    selectGameState,
    getWinner
);

export const selectGamePlayerCount: MemoizedSelector<object, number> = createSelector(
    selectGameState,
    getPlayerCount
);