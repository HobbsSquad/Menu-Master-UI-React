import {
  REQUEST_INGREDIENTS,
  INGREDIENTS_SUCCESS,
  INGREDIENTS_FAIL,
  SEND_NEW_INGREDIENT,
  NEW_INGREDIENT_SUCCESS,
  NEW_INGREDIENT_FAIL
} from "../actionTypes/grocery";

const initialState = {
  ingredientsStatus: '',
  ingredients: null,
  newIngredientStatus: ''
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
    default:
      return state;
  }
}

export default grocery;