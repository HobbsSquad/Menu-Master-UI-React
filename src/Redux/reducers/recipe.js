import {
  REQUEST_RECIPES,
  RECIPES_SUCCESS,
  RECIPES_FAIL,
  REQUEST_CURRENT_RECIPE,
  CURRENT_RECIPE_SUCCESS,
  CURRENT_RECIPE_FAIL,
  SEND_NEW_RECIPE,
  NEW_RECIPE_SUCCESS,
  NEW_RECIPE_FAIL,
  REQUEST_RECIPE_UPDATE,
  UPDATE_RECIPE_SUCCESS,
  UPDATE_RECIPE_FAIL,
  REQUEST_DELETE_RECIPE,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAIL
} from "../actionTypes/recipe";

const initialState = {
  recipesStatus: '',
  recipes: null,
  currentRecipeStatus: '',
  currentRecipe: null,
  newRecipeStatus: '',
  updateRecipeStatus: ''
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
    case REQUEST_RECIPE_UPDATE: {
      return {
        ...state,
        updateRecipeStatus: 'requestingRecipeUpdate'
      }
    }
    case UPDATE_RECIPE_SUCCESS: {
      return {
        ...state,
        updateRecipeStatus: 'updateRecipeSuccess',
        recipes: action.recipes,
        currentRecipe: action.currentRecipe
      }
    }
    case UPDATE_RECIPE_FAIL: {
      return {
        ...state,
        updateRecipeStatus: 'updateRecipeFail'
      }
    }
    case REQUEST_DELETE_RECIPE: {
      return {
        ...state,
        deleteRecipeStatus: 'requestingDeleteRecipe'
      }
    }
    case DELETE_RECIPE_SUCCESS: {
      return {
        ...state,
        deleteRecipeStatus: 'deleteRecipeSuccess',
        currentRecipe: null,
        recipes: action.recipes
      }
    }
    case DELETE_RECIPE_FAIL: {
      return {
        ...state,
        deleteRecipeStatus: 'deleteRecipeFail'
      }
    }
    default:
      return state;
  }
}

export default recipe;