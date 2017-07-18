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

const ROOT_URL = 'http://192.168.0.104:8888/api'; //LAN Host
// const ROOT_URL = 'http://docowls.herokuapp.com/api'; //Heroku
// const ROOT_URL = 'http://localhost:8888/api'; //Local

// const API_KEY = '?key=ABCDEFG1fakekey';

export const userLogin = (credentials, newUser = false) => {
  console.log('userLogin called : ',arguments);
  let authRoute = 'signin';
  if(newUser === true){
    console.log('new user signup action');
    authRoute = 'signup';
  }else{
    console.log('regular log in action');
  }

  return dispatch => {
    dispatch({type:LOGIN_REQUEST})
    console.log('user login action dispatch called');
    axios({
      method:'post',
      url:`${ROOT_URL}/${authRoute}`,
      data:{username:credentials.username,password:credentials.password},
      dataType:'JSON',
      processData:false,
    }).then(res => {
      console.log('axios response recieved, ',res,newUser);
      if(newUser === false){
        localStorage.authToken = res.data.token;
        console.log('login really worked? ',res);
        dispatch({
          type:LOGIN_SUCCESS,
          user:jwtDecode(res.data.token)
        })
      }else{
        console.log('new user created : ', res);
        dispatch({
          type:LOGOUT
        })
      }
    }).catch(res => {
      console.log('by the way login really failed idiot', res);
      dispatch({
        type: LOGIN_FAILURE,
        errorMessage: res.error
        // errorMessage: res.data.error
      })
    })
  }
}

export const logout = () => {
  console.log('logout action fired');
  delete localStorage.authToken
  return { type: LOGOUT }
}


export function fetchPosts() {
  // const request = axios.get(`${ROOT_URL}/api/posts${API_KEY}`);
  const request = axios.get(`${ROOT_URL}/posts`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values,callback){

const request = axios.post(`${ROOT_URL}/posts`,values,{
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('authToken')
    }
  })
  .then(() => callback())
  .catch(res => {
    console.log("You can not post for some reason ", res);
    dispatch({
      type:LOGIN_FAILURE,
      errorMessage:res.error
    })
  })
    return{
      type: CREATE_POST,
      payload: request
    }
}

export const cardScramble = (cards,n) => {
  return dispatch =>{
  let iterations = n;
  // is returning a new object necessary for immutable state change in reducer?
  cards.forEach((card,i)=>{
    let rngI = Math.floor(Math.random() * cards.length);
    let temp = cards[i];
    cards[i] = cards[rngI];
    cards[rngI] = temp;
  })
  if(n < 1){
    // console.log('shuffled cards to :',newCards); //its an array of objects
    // dumbass
    return dispatch({
      type: SCRAMBLE,
      newCards: cards
    });

  }else{
    iterations--;
    cardScramble(cards,iterations);
  }

  dispatch({
    type:SCRAMBLE,
    newCards: cards
  })

}
}
