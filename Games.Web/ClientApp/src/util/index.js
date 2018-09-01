import PropTypes from 'prop-types';

export const mapSuit = suit => {
    switch (suit) {
        case 'Clubs':
            return 'club';
        case 'Diamonds':
            return 'diamond';
        case 'Hearts':
            return 'heart';
        case 'Spades':
            return 'spade';
        default:
            return suit;
    }
};

export const mapRank = rank => {
    switch (rank) {
        case 'Ace':
            return 1;
        case 'Jack':
        case 'Queen':
        case 'King':
            return rank.toLowerCase();
        default:
            return rank;
    }
};

export const cardShape = {
    rank: PropTypes.string,
    suit: PropTypes.string
};

export const playerShape = {
    id: PropTypes.number,
    name: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.shape(cardShape)),
    score: PropTypes.number
};

export const playerProps = {
    cards: [],
    name: '',
    score: 0
};