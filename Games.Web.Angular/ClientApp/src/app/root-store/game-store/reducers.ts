import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export const gameReducer = (state = initialState, action: Actions): State => {
    switch (action.type) {
        case ActionTypes.DEAL_CARD:
            return {
                round: {
                    deck: action.payload.deck,
                    players: action.payload.players,
                    ...state.round
                },
                ...state
            };
        case ActionTypes.RESET_GAME:
            return {
                playerCount: state.playerCount,
                ...initialState
            };
        case ActionTypes.SET_PLAYERS:
            return {
                playerCount: action.payload.playerCount,
                round: {
                    players: action.payload.players,
                    ...state.round
                }
            };
        case ActionTypes.SET_WINNER:
            return {
                round: {
                    winner: action.payload.winner,
                    ...state.round
                },
                ...state
            };
        case ActionTypes.START_GAME:
            return {
                round: {
                    deck: action.payload.deck,
                    wildcard: action.payload.wildcard,
                    ...state.round
                },
                ...state
            };
        default:
            return state;
    }
};