import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export const appReducer = (state = initialState, action: Actions): State => {
    switch (action.type) {
        case ActionTypes.REQUEST_CARDS:
            return {
                ...state
            };
        case ActionTypes.RECEIVE_CARDS:
            return  {
                ...state,
                deck: action.payload.cards,
                deckLoaded: action.payload.cards.length === 52,
            };
        case ActionTypes.SEND_ROUND:
            return {
                ...initialState,
                deck: state.deck,
                deckLoaded: state.deckLoaded
            };
        case ActionTypes.HANDLE_ERROR:
            return {
                ...initialState,
                error: action.payload.error
            };
        default:
            return state;
    }
};