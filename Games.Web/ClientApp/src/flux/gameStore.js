import shuffle from 'lodash.shuffle';
import maxBy from 'lodash.maxby';

const setPlayers = 'SET_PLAYERS';
const dealCard = 'DEAL_CARD';
const startGame = 'START_GAME';
const setWinner = 'SET_WINNER';
const resetGame = 'RESET_GAME';

const initialState = {
    playerCount: 0,
    players: [],
    gameDeck: []
};

const generatePlayer = (_, index) => ({
    id: index,
    name: `Player ${index + 1}`,
    cards: [],
    score: 0
});

const generatePlayers = count => Array.from(Array(count), generatePlayer);

const countCards = (cards, wildcard) => cards.reduce((total, current) => {
    return total += current.suit === wildcard.suit ? current.value * 2 : current.value;
}, 0);

export const actions = {
    setPlayers: count => async dispatch => {
        dispatch({
            type: setPlayers,
            players: generatePlayers(count)
        });
    },
    dealCardToPlayer: () => async (dispatch, getState) => {
        const { game } = getState();
        const { deal, players, gameDeck, wildcard } = game;
        const dealtPlayers = players.map(p => {
            if (p.cards.length < 5) {
                const card = gameDeck.shift();
                p.cards.push(card);
                p.score = countCards(p.cards, wildcard);
            }
            return {
                ...p
            };
        });
        dispatch({
            type: dealCard,
            players: dealtPlayers,
            gameDeck,
            deal: deal + 1
        });
    },
    startGame: () => async (dispatch, getState) => {
        const { app } = getState();
        const { deck } = app;
        const gameDeck = shuffle(deck);
        const wildcard = gameDeck.splice(Math.floor(Math.random() * gameDeck.length), 1).pop();
        dispatch({
            type: startGame,
            gameDeck,
            wildcard
        });
    },
    calculateWinner: () => async (dispatch, getState) => {
        const { game } = getState();
        const { players } = game;
        const winner = maxBy(players, 'score');
        dispatch({
            type: setWinner,
            winner
        });
    },
    resetGame: () => async dispatch => dispatch({ type: resetGame })
};

export const reducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case setPlayers:
            return {
                ...state,
                players: action.players,
                playerCount: action.players.length
            };
        case dealCard:
            return {
                ...state,
                gameDeck: action.gameDeck,
                players: action.players,
                deal: action.deal
            };
        case startGame:
            return {
                ...state,
                gameDeck: action.gameDeck,
                wildcard: action.wildcard,
                deal: 0
            };
        case setWinner:
            return {
                ...state,
                winner: action.winner
            };
        case resetGame:
            return Object.assign(initialState, {
                playerCount: state.playerCount,
                players: generatePlayers(state.playerCount)
            });
        default:
            return state;
    }
};
