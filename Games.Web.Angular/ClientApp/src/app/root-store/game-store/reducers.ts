import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export const gameReducer = (state = initialState, action: Actions): State => {
    switch (action.type) {
        case ActionTypes.UPDATE_HAND:
            return {
                ...state,
                round: {
                    ...state.round,
                    ...action.round
                }
            };
        case ActionTypes.RESET_GAME:
            return {
                ...initialState,
                playerCount: state.playerCount
            };
        case ActionTypes.SET_PLAYERS:
            return {
                playerCount: action.payload.players.length,
                round: {
                    ...state.round,
                    players: action.payload.players
                }
            };
        case ActionTypes.SET_WINNER:
            return {
                ...state,
                round: {
                    ...state.round,
                },
            };
        case ActionTypes.INIT_ROUND:
            return {
                ...state,
                round: {
                    ...state.round,
                    deck: action.payload.deck,
                    wildcard: action.payload.wildcard
                }
            };
        default:
            return state;
    }
};