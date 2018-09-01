import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from './flux';
import Controls from './components/Controls';
import Hand from './components/Hand';
import Input from './components/Input';
import Layout from './components/Layout';
import Wildcard from './components/Wildcard';
import Winner from './components/Winner';

class App extends React.Component {
    state = {
        playerInput: 0
    }
    componentDidMount() {
        const { getCards } = this.props;
        // app ready, get cards
        getCards();
    }
    componentDidUpdate(prevProps) {
        const { deal, winner, dealCardToPlayer, calculateWinner, saveGame } = this.props;
        const { deal: prevDeal, winner: prevWinner } = prevProps;
        if (deal) {
            // deal card to all players
            dealCardToPlayer();
        }
        if (prevDeal && !deal) {
            // dealing finished
            calculateWinner();
        }
        if (winner && !prevWinner) {
            // save round in history
            saveGame();
        }
    }
    startGame() {
        const { startGame } = this.props;
        startGame();
    }
    onPlayerChange(e) {
        const { setPlayers } = this.props;
        const playerInput = Number.parseInt(e.target.value || 0, 10);
        this.setState({
            playerInput
        }, () => setPlayers(playerInput));
    }
    render() {
        const { players, resetGame, startGame, wildcard, winner } = this.props;
        const { playerInput } = this.state;
        const inputComponent =
            <Input
                playerCount={playerInput}
                started={!!wildcard}
                onPlayerChange={this.onPlayerChange.bind(this)}
                startGame={startGame}
                resetGame={resetGame}
            />;
        const wildcardComponent = <Wildcard card={wildcard} />;
        const winnerComponent = winner ? <Winner {...winner} /> : null;
        const playersComponent = wildcard ? players.map(p => <Hand key={p.id} {...p} />) : null;
        const layout =
            <Layout
                controls={
                    <Controls
                        input={inputComponent}
                        wildcard={wildcardComponent}
                    />}
                players={playersComponent}
                winner={winnerComponent}
            />;
        return <div>
            {layout}
        </div>;
    }
}

export default connect(
    state => ({
        deck: state.game.gameDeck,
        deal: state.game.deal,
        cardCount: state.game.gameDeck.length,
        playerCount: state.game.playerCount,
        players: state.game.players,
        wildcard: state.game.wildcard,
        winner: state.game.winner
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(App);