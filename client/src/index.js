import materializeCSS from 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './containers/App';
import combineReducers from './reducers';

const store = createStore(combineReducers, compose(applyMiddleware(reduxThunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>,document.querySelector('#root'));
