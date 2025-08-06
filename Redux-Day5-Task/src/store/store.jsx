import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { apiReducer } from './reducer';

const store = createStore(
  apiReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
    : applyMiddleware(thunk)
);

export default store;
