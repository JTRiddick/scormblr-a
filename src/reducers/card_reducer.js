const initialState = {
  cards:[],
  iterations:0
}
const cardScramble = (cards,n) => {
  let iterations = n

  cards.forEach((card,i)=>{
    let rngI = Math.floor(Math.random() * cards.length);
    let temp = cards[i];
    cards[i] = cards[rngI];
    cards[rngI] = temp;
  })
  if(n < 1){
    return cards;
  }else{
    iterations--;
    cardScramble(cards,iterations);
  }

}

export default function cardReducer(state = initialState,action){


  switch (action.type) {
    case 'ADD_CARD':
      return Object.assign({},state,state.cards.push({name: action.name, text:action.text}));
    case 'REMOVE_CARD':
      return Object.assign({},state,state.cards.pop());
    case 'SCRAMBLE':
      if(action.iterations > 1 && state.cards.length > 1){
       return Object.assign({},state,cardScramble(state.cards,action.iterations))
     }else {
       return state;
     }

    default:
      return state;
  }
}
