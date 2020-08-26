import {
  REQUEST_INGREDIENTS,
  INGREDIENTS_SUCCESS,
  INGREDIENTS_FAIL,
  SEND_NEW_INGREDIENT,
  NEW_INGREDIENT_SUCCESS,
  NEW_INGREDIENT_FAIL,
  REQUEST_INGREDIENT_UPDATE,
  INGREDIENT_UPDATE_SUCCESS,
  INGREDIENT_UPDATE_FAIL,
  REQUEST_INGREDIENT,
  INGREDIENT_SUCCESS,
  INGREDIENT_FAIL,
  REQUEST_DELETE_INGREDIENT,
  DELETE_INGREDIENT_SUCCESS,
  DELETE_INGREDIENT_FAIL
} from "../actionTypes/grocery";

const initialState = {
  ingredientsStatus: '',
  ingredients: null,
  ingredientStatus: '',
  ingredient: null,
  newIngredientStatus: '',
  deleteIngredientStatus: ''
};

const grocery = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_INGREDIENTS: {
      return {
        ...state,
        ingredientsStatus: 'requestingIngredients'
      }
    }
    case INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsStatus: 'ingredientsLoaded',
        ingredients: action.ingredients
      }
    }
    case INGREDIENTS_FAIL: {
      return {
        ...state,
        ingredientsStatus: 'ingredientsFailed',
        ingredients: null
      }
    }
    case REQUEST_INGREDIENT: {
      return {
        ...state,
        ingredientStatus: 'requestingIngredient'
      }
    }
    case INGREDIENT_SUCCESS: {
      return {
        ...state,
        ingredientStatus: 'ingredientSuccess',
        ingredient: action.ingredient
      }
    }
    case INGREDIENT_FAIL: {
      return {
        ...state,
        ingredientStatus: 'ingredientFail'
      }
    }
    case SEND_NEW_INGREDIENT: {
      return {
        ...state,
        newIngredientStatus: 'sendingNewIngredient'
      }
    }
    case NEW_INGREDIENT_SUCCESS: {
      return {
        ...state,
        newIngredientStatus: 'newIngredientSuccess',
        ingredients: action.ingredients
      }
    }
    case NEW_INGREDIENT_FAIL: {
      return {
        ...state,
        newIngredientStatus: 'newIngredientFail'
      }
    }
    case REQUEST_INGREDIENT_UPDATE: {
      return {
        ...state,
        newIngredientStatus: 'requestingIngredientUpdate'
      }
    }
    case INGREDIENT_UPDATE_SUCCESS: {
      return {
        ...state,
        newIngredientStatus: 'ingredientUpdateSuccess',
        ingredients: action.ingredients,
        ingredient: action.ingredient
      }
    }
    case INGREDIENT_UPDATE_FAIL: {
      return {
        ...state,
        newIngredientStatus: 'ingredientUpdateFail'
      }
    }
    case REQUEST_DELETE_INGREDIENT: {
      return {
        ...state,
        deleteIngredientStatus: 'requestingDeleteIngredient'
      }
    }
    case DELETE_INGREDIENT_SUCCESS: {
      return {
        ...state,
        deleteIngredientStatus: 'deleteIngredientSuccess',
        ingredients: action.ingredients,
        ingredient: null
      }
    }
    case DELETE_INGREDIENT_FAIL: {
      return{
        ...state,
        deleteIngredientStatus: 'deleteIngredientFail'
      }
    }
    default:
      return state;
  }
}

export default grocery;