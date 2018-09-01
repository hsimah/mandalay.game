import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import * as app from './appStore';
import * as game from './gameStore';

export const actions = Object.assign({}, app.actions, game.actions);

export default initialState => {
    const reducers = {
        app: app.reducer,
        game: game.reducer
    };

    const middleware = [
        thunk,
        logger
    ];

    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    const rootReducer = combineReducers({
        ...reducers
    });

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
};