import { createStore } from 'redux';

const initialState = {
  number: 0
};

const reducer = (state = initialState,action) => {
  console.log('action ', action);

  switch (action.type) {
    case 'INCREMENT':
      //do stuff
      return Object.assign({}, state, { number: state.number + 1 });
    case 'INCREMENT_WITH_AMOUNT':
      return Object.assign({}, state, {number: state.number + action.value});
    default:
      return state;
  }

}

let store;
  if (typeof window !== 'undefined'){
    store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  } else{
    store = createStore(reducer);
  }

export default store;
