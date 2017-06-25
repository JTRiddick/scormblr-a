const initialState = {
  cards:[{
    name: 'blank',
    text: 'none'
  }]
}

export default function cardReducer(state = initialState,action){

  switch (action.type) {
    case 'ADD_CARD':
      return Object.assign({},state,cards=cards.push({name: action.name, text:action.text}));

    default:
      return state;
  }
}
