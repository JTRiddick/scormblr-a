import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, NEW_USER, FORM_LOGIN } from '../actions';
import jwtDecode from 'jwt-decode';

// const initialState = {
//   isAuthenticating:fasle,
//   currentUser:null,
//   errorMessage:null
// }

const initialState = (token => ({
  isAuthenticating: false,
  currentUser: token ? jwtDecode(token) : null, //throws error when reloading page where authToken undefined!!
  errorMessage: null,
  signUp:false
}))(localStorage.authToken)

const loginReducer = ( state = initialState, action = {} ) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
        signUp:false
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        errorMessage: action.errorMessage,
        signUp:false
      }
    case LOGIN_SUCCESS:
      return {
        isAuthenticating: false,
        currentUser: action.user,
        errorMessage: null,
        signUp:false
      }
    case LOGOUT:
      return {
        isAuthenticating: false,
        currentUser: null,
        errorMessage: null,
        signUp:false
      }
    case NEW_USER:
      return{
        isAuthenticating:false,
        currentUser:null,
        errorMessage:null,
        signUp:true
      }
    case FORM_LOGIN:
      return{
        ...state,
        signUp:false
      }
    default:
      return state
  }
}

export default loginReducer;
