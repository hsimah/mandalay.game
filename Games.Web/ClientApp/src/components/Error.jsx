import React from 'react';
import PlayingCard from './PlayingCard';
import { Typography } from '@material-ui/core';

const Loading = () => <div>
    <Typography component='p'>
        Card Game encountered an error. Please refresh the browser to try again.
    </Typography>
    <div
        style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <PlayingCard back />
    </div>
</div>;

export default Loading;