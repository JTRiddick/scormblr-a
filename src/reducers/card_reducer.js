import { ADD_CARD, REMOVE_CARD, SCRAMBLE } from '../actions/index';

const initialState = {
  cards:[],
  iterations:0
}


export default function cardReducer(state = initialState,action){


  switch (action.type) {
    case ADD_CARD:
      // return Object.assign({},state,state.cards.push({name: action.name, text:action.text}));
      return Object.assign({},state,{cards:[...state.cards,{name:action.name,text:action.text}]});
    case REMOVE_CARD:
      return Object.assign( {},state,{cards:state.cards.slice(0,-1)} );
    case SCRAMBLE:
      if(state.cards.length > 1){
       return Object.assign({},state,{cards:[...action.newCards]});
     }else {
       return state;
     }

    default:
      return state;
  }
}
