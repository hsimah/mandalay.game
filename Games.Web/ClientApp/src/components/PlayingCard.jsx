import React from 'react';
import PropTypes from 'prop-types';
import SvgCards from 'svg-cards/svg-cards.svg';
import { withStyles } from '@material-ui/core/styles';

import { mapRank, mapSuit } from '../util';

// magic numbers from svg-card documentation
const height = 244.64 * 0.8;
const width = 169.075 * 0.8;

const styles = theme => ({
    wrapper: {
        display: 'inline-block',
        padding: '0.5em'
    },
    card: {
        transformOrigin: 'top left',
        height,
        width,
        overflow: 'visible'
    }
});

const PlayingCard = props => {
    const { classes, back, suit, rank } = props;
    const card = back ? 'back' : `${mapSuit(suit)}_${mapRank(rank)}`;
    return <div className={classes.wrapper}>
        <svg
            className={classes.card}
            transform={'scale(0.8)'}
            viewBox={`0 0 ${width} ${height}`}
        >
            <use xlinkHref={`${SvgCards}#${card}`} />
        </svg>
    </div>;
};
PlayingCard.propTypes = {
    back: PropTypes.bool,
    rank: PropTypes.string,
    scale: PropTypes.number,
    suit: PropTypes.string
};
PlayingCard.defaultProps = {
    back: false,
    rank: 'red',
    scale: 1,
    suit: 'joker'
};

export default withStyles(styles)(PlayingCard);