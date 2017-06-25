import { combineReducers } from 'redux';
import clickReducer from './click_reducer';
import cardReducer from './card_reducer';

const initialState = {
  number: 0,
  cards:[{
    name: 'blank',
    text: 'none'
  }]
};


const rootReducer = combineReducers({
  // state: (state = {}) => state
  number: clickReducer,
  card: cardReducer
});

export default rootReducer;
