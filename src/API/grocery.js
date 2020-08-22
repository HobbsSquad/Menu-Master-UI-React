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

  async ingredient(token, ingredientId) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const ingredient = await axios.get(apiRoot + '/ingredient/' + ingredientId, options);
    return ingredient.data;
  }

  async newIngredient(token, newGroceryItem) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const groceryItem = await axios.post(apiRoot + '/ingredient', newGroceryItem, options);
    return groceryItem.data;
  }

  async updateIngredient(token, newGroceryItem) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const groceryItem = await axios.put(apiRoot + '/ingredient/' + newGroceryItem._id, newGroceryItem, options);
    return groceryItem.data;
  }
}