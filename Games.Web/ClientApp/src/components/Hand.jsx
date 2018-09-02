import React from 'react';
import Typography from '@material-ui/core/Typography';

import PlayingCard from './PlayingCard';
import { playerShape, playerProps } from '../util';

const Hand = props => props.cards.length ? <div>
    <Typography gutterBottom variant='headline' component='h3'>
        {props.name} score: {props.score}
    </Typography>
    {props.cards.map(c => <PlayingCard key={`${props.id}-${c.suit}-${c.rank}`} rank={c.rank} suit={c.suit} />)}
</div> : null;
Hand.propTypes = playerShape;
Hand.defaultProps = playerProps;

export default Hand;