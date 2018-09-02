import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from './flux';
import Error from './components/Error';
import Layout from './components/Layout';
import Loading from './components/Loading';

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
        const { cardsLoading, error } = this.props;
        if (error) return <Error />;
        if (cardsLoading) return <Loading />;
        return <Layout />;
    }
}

export default connect(
    state => ({
        cardsLoading: state.app.cardsLoading,
        deal: state.game.deal,
        error: state.app.error,
        winner: state.game.winner
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(App);