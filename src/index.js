import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import Store from './store';

// Components
import Game from './components/game';
import registerServiceWorker from './registerServiceWorker';

// const createStoreWithMiddleware = applyMiddleware()(createStore)


ReactDOM.render(
    <Provider store={Store}>
        <Game />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
