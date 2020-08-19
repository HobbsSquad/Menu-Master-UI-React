import axios from 'axios'
import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv()
const apiRoot = env.REACT_APP_API

export default class RecipeAPI {

  async recipes(token) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const recipes = await axios.get(apiRoot + '/recipe', options);
    return recipes.data;
  }

  async recipe(token, recipeId) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const recipe = await axios.get(apiRoot + '/recipe/' + recipeId, options);
    return recipe.data;
  }
}