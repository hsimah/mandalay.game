import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './flux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = window.initialReduxState;
const reduxStore = store(initialState);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    rootElement);

registerServiceWorker();
