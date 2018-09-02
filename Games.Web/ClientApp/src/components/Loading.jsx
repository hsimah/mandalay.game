import React from 'react';
import PlayingCard from './PlayingCard';
import { Typography } from '@material-ui/core';

const Loading = () => <div>
    <Typography component='p'>
        Card Game loading...
    </Typography>
    <div
        style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <PlayingCard rotate />
    </div>
</div>;

export default Loading;