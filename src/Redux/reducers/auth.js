import { REQUEST_LOGIN,
         LOGIN_SUCCESS,
         LOGIN_FAIL,
         LOGOUT } from "../actionTypes/auth";

const initialState = {
  userStatus: 'loggedOut',
  userId: null,
  token: null,
  tokenExpiration: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN: {
      return {
        ...state,
        userStatus: 'loggingIn'
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        userStatus: 'loggedIn',
        userId: action.userId,
        token: action.token,
        tokenExpiration: action.tokenExpiration
      } 
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        userStatus: 'loggedOut',
        userId: null,
        token: null,
        tokenExpiration: null
      }
    }
    case LOGOUT: {
      return {
        ...state,
        userStatus: 'loggedOut',
        userId: null,
        token: null,
        tokenExpiration: null
      }
    }
    default:
      return state;
  }
}

export default auth