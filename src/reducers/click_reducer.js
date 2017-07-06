// import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import { INCREMENT, DECREMENT, INCREMENT_WITH_AMOUNT, DECREMENT_WITH_AMOUNT } from '../actions';

const initialState = {
  number: 0
};

export default function clickReducer(state = initialState,action){
  // console.log('action ', action);

  switch (action.type) {
    case INCREMENT: //and then do stuff
      return Object.assign({}, state, { number: state.number + 1 });
    case INCREMENT_WITH_AMOUNT:
      return Object.assign({}, state, {number: state.number + action.value});
    case DECREMENT:
      return Object.assign({}, state, { number: state.number - 1});
    case DECREMENT_WITH_AMOUNT:
      return Object.assign({}, state, { number: state.number - action.value});
    default:
      return state;
  }

}
