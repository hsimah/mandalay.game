import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from './flux';
import Layout from './components/Layout';

class App extends React.Component {
    componentDidMount() {
        const { getCards } = this.props;
        // app ready, get cards
        getCards();
    }
    componentDidUpdate(prevProps) {
        const { calculateWinner, deal, dealCardToPlayer, saveGame, winner } = this.props;
        const { winner: prevWinner } = prevProps;
        // deal card to all players
        if (deal < 5) dealCardToPlayer();
        // dealing finished
        if (deal >= 5) calculateWinner();
        // save round in history
        if (winner && !prevWinner) saveGame();
    }
    render() {
        return <Layout />;
    }
}

export default connect(
    state => ({
        deal: state.game.deal,
        winner: state.game.winner
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(App);