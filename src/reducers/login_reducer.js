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
}))(localStorage.authToken)

const loginReducer = ( state = initialState, action = {} ) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticating: true
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        errorMessage: action.errorMessage
      }
    case LOGIN_SUCCESS:
      return {
        isAuthenticating: false,
        currentUser: action.user,
        errorMessage: null
      }
    case LOGOUT:
      return {
        isAuthenticating: false,
        currentUser: null,
        errorMessage: null
      }
    default:
      return state
  }
}

export default loginReducer;
