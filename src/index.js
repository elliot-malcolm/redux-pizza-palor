import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const pizzaMenu = (state=[], action) => {
    if (action.type === 'PIZZA_MENU_LOAD'){
        console.log('payload', action.payload);
        return action.payload 
    }
    return state;
}

const reduxStore = createStore (
  combineReducers({
    pizzaMenu
    // applyMiddleware(logger)
  })
);

  ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
