import { combineReducers } from 'redux';
import clickReducer from './click_reducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  number: clickReducer
});

export default rootReducer;
