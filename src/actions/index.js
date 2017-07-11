import axios from 'axios';

export const USER_LOGIN = 'USER_LOGIN';

export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const INCREMENT = 'INCREMENT';
export const INCREMENT_WITH_AMOUNT = 'INCREMENT_WITH_AMOUNT';
export const DECREMENT = 'DECREMENT';
export const DECREMENT_WITH_AMOUNT = 'DECREMENT_WITH_AMOUNT';
export const SCRAMBLE = 'SCRAMBLE';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';


const ROOT_URL = 'http://docowls.herokuapp.com';
// const API_KEY = '?key=ABCDEFG1fakekey';


export function fetchPosts() {
  // const request = axios.get(`${ROOT_URL}/api/posts${API_KEY}`);
  const request = axios.get(ROOT_URL + '/api/posts');
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback){
  const request = axios.post(ROOT_URL + '/api/posts')
    .then(() => callback());
    return{
      type: CREATE_POST,
      payload: request
    }
}

export function cardScramble(cards,n) {
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
