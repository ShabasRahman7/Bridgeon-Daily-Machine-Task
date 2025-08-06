import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

export const store = createStore(rootReducer);
