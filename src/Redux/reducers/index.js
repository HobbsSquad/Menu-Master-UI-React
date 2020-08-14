import { combineReducers } from 'redux'
import auth from './auth'
import menu from './menu'
import grocery from './grocery';
import recipe from './recipe';

export default combineReducers({
  auth,
  menu,
  grocery,
  recipe
})
