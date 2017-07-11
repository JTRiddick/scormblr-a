import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

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


const ROOT_URL = 'http://docowls.herokuapp.com/api';
// const API_KEY = '?key=ABCDEFG1fakekey';

export function userLogin(credentials) {
  console.log('userLogin called : ',credentials);
  // return dispatch => {
  //   dispatch({type:LOGIN_REQUEST})
  // }
  axios({
    method:'post',
    url:`${ROOT_URL}/signin`,
    data:credentials,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    processData:false,
  }).then(res => {
    localStorage.authToken = res.data.token;
    console.log('login ',res);
    return({
      type:LOGIN_SUCCESS,
      user:jwtDecode(res.data.token)
    })
  }).catch(res => {
    console.log('by the way login really failed idiot');
    return({
      type: LOGIN_FAILURE,
      errorMessage: res.data.error
    })
  })
}

const logout = () => {
  delete localStorage.authToken
  return { type: LOGOUT }
}

export function fetchPosts() {
  // const request = axios.get(`${ROOT_URL}/api/posts${API_KEY}`);
  const request = axios.get(ROOT_URL + '/posts');
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback){
  const request = axios.post(ROOT_URL + '/posts')
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
