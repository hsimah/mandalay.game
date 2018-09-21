import { Card } from '../../models/card';

export interface State {
    deck: Card[],
    deckLoaded: boolean,
    error?: any
}

export const initialState: State = {
    deck: [] as Card[],
    deckLoaded: false,
    error: null
}