﻿import axios from 'axios';
const requestCards = 'REQUEST_CARDS';
const receiveCards = 'RECEIVE_CARDS';
const sendRound = 'SEND_ROUND';

const initialState = {
    deck: [],
    cardsLoaded: false,
    cardsLoading: false
};

const suits = [
    'Clubs',
    'Diamonds',
    'Hearts',
    'Spades'
];

const buildDeck = cards => {
    const deck = [];
    suits.forEach(suit => cards.forEach(card => deck.push({
        suit,
        rank: card.rank,
        value: card.value
    })));
    return deck;
};

export const actions = {
    getCards: () => async (dispatch, getState) => {
        const { cardsLoaded, cardsLoading } = getState();
        if (cardsLoaded || cardsLoading) return;
        dispatch({ type: requestCards });
        const { data } = await axios('/api/card');
        dispatch({
            type: receiveCards,
            deck: buildDeck(data)
        });
    },
    saveGame: () => async (dispatch, getState) => {
        const { game } = getState();
        const { players, winner, wildcard } = game;
        const round = {
            players,
            winner,
            wildcard,
            timestamp: new Date().toUTCString()
        };
        axios.post('/api/round', round);
        dispatch({
            type: sendRound
        });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case requestCards:
            return {
                ...state,
                cardsLoading: true,
                cardsLoaded: false
            };
        case receiveCards:
            return {
                ...state,
                deck: action.deck,
                cardsLoading: false,
                cardsLoaded: true
            };
        default:
            return state;
    }
};
