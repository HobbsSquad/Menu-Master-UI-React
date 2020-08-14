import axios from 'axios'
import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv()
const apiRoot = env.REACT_APP_API

export default class GroceryAPI {

  async ingredients(token) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const ingredients = await axios.get(apiRoot + '/ingredient', options);
    return ingredients.data;
  }
}