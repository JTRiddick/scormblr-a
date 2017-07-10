import { ADD_CARD, REMOVE_CARD, SCRAMBLE } from '../actions/index';

const initialState = {
  cards:[],
  iterations:0
}
const cardScramble = (cards,n) => {
  let iterations = n;
  // is returning a new object necessary for immutable state change in reducer?
  let newCards = {};

  cards.forEach((card,i)=>{
    let rngI = Math.floor(Math.random() * cards.length);
    let temp = cards[i];
    cards[i] = cards[rngI];
    cards[rngI] = temp;
  })
  if(n < 1){
    newCards = cards;
    // console.log('shuffled cards to :',newCards); //its an array of objects
    // dumbass
    return newCards;
  }else{
    iterations--;
    cardScramble(cards,iterations);
  }

}

export default function cardReducer(state = initialState,action){


  switch (action.type) {
    case ADD_CARD:
      // return Object.assign({},state,state.cards.push({name: action.name, text:action.text}));
      return Object.assign({},state,{cards:[...state.cards,{name:action.name,text:action.text}]});
    case REMOVE_CARD:
      return Object.assign( {},state,{cards:state.cards.slice(0,-1)} );
    case SCRAMBLE:
      if(action.iterations > 1 && state.cards.length > 1){
        let newCards = state.cards;
        newCards = cardScramble(newCards,action.iterations);
        console.log('newcards :', newCards); // returns undefined but works on remount
       return Object.assign({},state,{cards:[...newCards]});
     }else {
       return state;
     }

    default:
      return state;
  }
}
