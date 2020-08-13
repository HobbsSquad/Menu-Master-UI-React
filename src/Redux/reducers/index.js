import { combineReducers } from 'redux'
import auth from './auth'
import menu from './menu'
import grocery from './grocery'

export default combineReducers({
  auth,
  menu,
  grocery
})
