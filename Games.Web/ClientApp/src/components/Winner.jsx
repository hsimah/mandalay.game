import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { playerShape, playerProps } from '../util';

const Winner = props => props.won ? <AppBar position='static' color='default'>
    <Toolbar>
        <Typography variant='headline' component='h2'>
            {props.name} won with a score of {props.score}!
        </Typography>
    </Toolbar>
</AppBar> : null;
Winner.propTypes = playerShape;
Winner.defaultProps = playerProps;

export default connect(
    state => ({
        ...state.game.winner,
        won: !!state.game.winner
    })
)(Winner);