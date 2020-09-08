import {
  REQUEST_RECIPES,
  RECIPES_SUCCESS,
  RECIPES_FAIL,
  REQUEST_CURRENT_RECIPE,
  CURRENT_RECIPE_SUCCESS,
  CURRENT_RECIPE_FAIL,
  SEND_NEW_RECIPE,
  NEW_RECIPE_SUCCESS,
  NEW_RECIPE_FAIL
} from "../actionTypes/recipe";

const initialState = {
  recipesStatus: '',
  recipes: null,
  currentRecipeStatus: '',
  currentRecipe: null,
  newRecipeStatus: ''
};

const recipe = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RECIPES: {
      return {
        ...state,
        recipesStatus: 'requestingRecipes'
      }
    }
    case RECIPES_SUCCESS: {
      return {
        ...state,
        recipesStatus: 'recipesLoaded',
        recipes: action.recipes
      }
    }
    case RECIPES_FAIL: {
      return {
        ...state,
        recipesStatus: 'recipesFailed',
        recipes: null
      }
    }
    case REQUEST_CURRENT_RECIPE: {
      return {
        ...state,
        currentRecipeStatus: 'requestingCurrentRecipe'
      }
    }
    case CURRENT_RECIPE_SUCCESS: {
      return {
        ...state,
        currentRecipeStatus: 'currentRecipeLoaded',
        currentRecipe: action.currentRecipe
      }
    }
    case CURRENT_RECIPE_FAIL: {
      return {
        ...state,
        currentRecipeStatus: 'currentRecipeFailed',
        currentRecipe: null
      }
    }
    case SEND_NEW_RECIPE: {
      return {
        ...state,
        newRecipeStatus: 'requestingNewRecipe'
      }
    }
    case NEW_RECIPE_SUCCESS: {
      return {
        ...state,
        newRecipeStatus: 'newRecipeSuccess',
        recipes: action.recipes
      }
    }
    case NEW_RECIPE_FAIL: {
      return {
        ...state,
        newRecipeStatus: 'newRecipeFail'
      }
    }
    default:
      return state;
  }
}

export default recipe;