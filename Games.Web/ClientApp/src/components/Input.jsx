import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Input = props => {
    const { playerCount, startGame, started, onPlayerChange, resetGame } = props;
    const allowStart = !started && playerCount > 1 && playerCount <= 10;
    return <div>
        <TextField
            id='number'
            label='Player Count'
            value={playerCount}
            onChange={onPlayerChange}
            type='number'
            InputLabelProps={{
                shrink: true
            }}
            inputProps={{
                min: 0,
                max: 10
            }}
            margin='normal'
            fullWidth
            disabled={started}
        />
        <Button variant='contained' disabled={!allowStart} onClick={startGame}>
            Start Game
        </Button>
        <Button variant='contained' disabled={!started} onClick={resetGame}>
            Reset Game
        </Button>
    </div>;
};
Input.propTypes = {
    onPlayerChange: PropTypes.func.isRequired,
    playerCount: PropTypes.number,
    resetGame: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
    started: PropTypes.bool.isRequired
};
Input.defaultProps = {
    onPlayerChange: () => null,
    playerCount: 0,
    resetGame: () => null,
    startGame: () => null,
    started: false
};

export default Input;