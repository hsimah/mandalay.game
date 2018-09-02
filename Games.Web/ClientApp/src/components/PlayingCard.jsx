import React from 'react';
import PropTypes from 'prop-types';
import SvgCards from 'svg-cards/svg-cards.svg';
import { withStyles } from '@material-ui/core/styles';

import { mapRank, mapSuit } from '../util';

// magic numbers from svg-card documentation
const height = 244.64;
const width = 169.075;

const styles = theme => ({
    wrapper: {
        display: 'inline-block',
        padding: '0.5em'
    },
    card: {
        height,
        width,
        overflow: 'visible'
    }
});

const PlayingCard = props => {
    const { back, classes, rank, rotate, suit } = props;
    const card = back ? 'back' : `${mapSuit(suit)}_${mapRank(rank)}`;
    return <div className={classes.wrapper}>
        <svg className={classes.card}>
            {rotate &&
                <animateTransform attributeName='transform'
                    attributeType='XML'
                    type='rotate'
                    from='0 0 0'
                    to='360 0 0'
                    dur='6s'
                    repeatCount='indefinite'
                />}
            <use xlinkHref={`${SvgCards}#${card}`} />
        </svg>
    </div>;
};
PlayingCard.propTypes = {
    back: PropTypes.bool,
    rank: PropTypes.string,
    rotate: PropTypes.bool,
    scale: PropTypes.number,
    suit: PropTypes.string
};
PlayingCard.defaultProps = {
    back: false,
    rank: 'red',
    rotate: false,
    scale: 1,
    suit: 'joker'
};

export default withStyles(styles)(PlayingCard);