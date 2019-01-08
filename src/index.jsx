// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messageReducer from './reducers/message_reducer';
import selectChannelReducer from './reducers/select_channel_reducer';

// State and reducers
const reducers = combineReducers({
  channels: identityReducer,
  messages: messageReducer
});

const identityReducer = (state = [null]) => state;

//initial. state
const initialState = {
  messages: [],
  currentUser: "Philou",
  channels: ["general", "Prout", "React", "Wine"],
  selectedChannel: "general"
};
const middlewares = applyMiddleware(reduxPromise, logger);
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
