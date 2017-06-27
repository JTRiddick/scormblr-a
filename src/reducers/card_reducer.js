const initialState = {
  cards:[]
}
const cardScramble = (cards,n) => {
  let newCards = [];

  cards.forEach((card,i)=>{
    let rngI = Math.floor(Math.random() * cards.length);
    let tI = cards[i];
    cards[i] = cards[rngI];
    cards[rngI] = tI;
    if(n < 1){
      newCards = cards;
      return newCards;
    }else{
      n = n - 1;
      cardScramble(cards,n);
    }
    return newCards;
  })

}

export default function cardReducer(state = initialState,action){


  switch (action.type) {
    case 'ADD_CARD':
      return Object.assign({},state,state.cards.push({name: action.name, text:action.text}));
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
