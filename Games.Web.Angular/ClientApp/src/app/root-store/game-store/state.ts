import { Round } from '../../models/round';

export interface State {
    playerCount: number,
    round: Round
}

export const initialState: State = {
    playerCount: 0,
    round: {
        deck : [],
        winner: null,
        wildcard: null,
        players: [],
        cardsDealt: 0
    }
}