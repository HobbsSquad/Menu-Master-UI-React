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

  async newRecipe(token, newRecipeItem) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const recipeItem = await axios.post(apiRoot + '/recipe', newRecipeItem, options);
    return recipeItem.data;
  }

  async updateRecipe(token, newRecipeItem) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const recipeItem = await axios.put(apiRoot + '/recipe/' + newRecipeItem._id, newRecipeItem, options);
    return recipeItem.data;
  }

  async deleteRecipe(token, recipeId) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const recipeItem = await axios.delete(apiRoot + '/recipe/' + recipeId, options);
    return recipeItem.data;
  }
}