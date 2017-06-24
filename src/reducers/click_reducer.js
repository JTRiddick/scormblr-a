const initialState = {
  number: 0
};

export default function clickReducer(state = initialState,action){
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
