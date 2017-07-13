import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import clickReducer from './click_reducer';
import cardReducer from './card_reducer';
import postsReducer from './posts_reducer';
import loginReducer from './login_reducer';


// const initialState = {
//   number: 0,
//   cards:[{
//     name: 'blank',
//     text: 'none'
//   }]
// };


const rootReducer = combineReducers({
  // state: (state = {}) => state
  number: clickReducer,
  card: cardReducer,
  posts: postsReducer,
  user: loginReducer,
  form: formReducer,
});

export default rootReducer;
