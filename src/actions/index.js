import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

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
        localStorage.authToken = res.data.token;
        console.log('login really worked? ',res);
        dispatch({
          type:LOGIN_SUCCESS,
          user:jwtDecode(res.data.token)
        })
      }).catch(err => {
      console.log('by the way login really failed idiot', err);
      dispatch({
        type: LOGIN_FAILURE,
        errorMessage: err.response.data.msg
      })
    })
  }
}

export const logout = (callback) => {
  console.log('logout action fired');
  delete localStorage.authToken;
  callback();
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

export function fetchPost(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback){
  const request = axios.delete(`${ROOT_URL}/posts/${id}`,{
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('authToken')
    }
  })
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}

export function createPost(values,callback){

const request = axios.post(`${ROOT_URL}/posts`,{
      'title':values.title,
      'body':values.body,
      'author':values.user,
      'userId':values.userId
    },{
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('authToken')
    }
  }).then(() => callback())
  .catch(err => {
    console.log("You can not post for some reason ", err);
    dispatch({
      type:LOGIN_FAILURE,
      errorMessage:err.response.data.msg
    })
  })
    return{
      type: CREATE_POST,
      payload: request
    }
}
