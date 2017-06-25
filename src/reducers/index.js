import { combineReducers } from 'redux';
import clickReducer from './click_reducer';
import cardReducer from './card_reducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  number: clickReducer,
  card: cardReducer
});

export default rootReducer;
