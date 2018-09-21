import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export const appReducer = (state = initialState, action: Actions): State => {
    switch (action.type) {
        case ActionTypes.REQUEST_CARDS:
            return {
                ...state
            };
        case ActionTypes.RECEIVE_CARDS:
            return {
                deck: action.payload.cards,
                deckLoaded: action.payload.cards.length === 52,
                ...state
            };
        case ActionTypes.SEND_ROUND:
            return {
                deck: state.deck,
                deckLoaded: state.deckLoaded,
                ...initialState
            };
        case ActionTypes.HANDLE_ERROR:
            return {
                error: action.payload.error,
                ...initialState
            };
        default:
            return state;
    }
};