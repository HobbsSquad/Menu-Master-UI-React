import {
  REQUEST_INGREDIENTS,
  INGREDIENTS_SUCCESS,
  INGREDIENTS_FAIL
} from "../actionTypes/grocery";

const initialState = {
  ingredientsStatus: '',
  ingredients: null
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
    default:
      return state;
  }
}

export default grocery;