import { createStore, applyMiddleware } from 'redux';
import { counterReducer } from './rducer';

const logger = store => next => action => {
  console.log('Dispatching:', action);
  let result = next(action);
  console.log('Next state:', store.getState());
  return result;
};

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // DevTools
  applyMiddleware(logger)
);

export default store;
