import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import PlayingCard from './PlayingCard';
import { cardShape } from '../util';

const Wildcard = props => <div>
    <Typography gutterBottom component='p'>
        {props.card.suit ? `The current wild suit is ${props.card.suit}.` : 'Start game to draw a wildcard.'}
    </Typography>
    {Object.keys(props.card).length ? <PlayingCard rank={props.card.rank} suit={props.card.suit} /> : <PlayingCard back />}
</div>;
Wildcard.propTypes = {
    card: PropTypes.shape(cardShape)
};
Wildcard.defaultProps = {
    card: {}
};

export default connect(
    state => ({
        card: state.game.wildcard
    })
)(Wildcard);