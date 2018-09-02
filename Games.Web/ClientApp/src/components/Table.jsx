import React from 'react';
import { connect } from 'react-redux';

import Hand from './Hand';

const Table = props => <div>
    {props.players.map(p => <Hand key={p.id} {...p} />)}
</div>;

export default connect(
    state => ({
        players: state.game.players
    })
)(Table);