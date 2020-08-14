import {
    REQUEST_INGREDIENTS,
    INGREDIENTS_SUCCESS
} from '../actionTypes/grocery';
import GroceryApi from '../../API/grocery';

const api = new GroceryApi();

export const requestIngredients = () => {
    return {
        type: REQUEST_INGREDIENTS
    }
}

export const ingredientsSuccess = (ingredients) => {
    return {
        type: INGREDIENTS_SUCCESS,
        ingredients
    }
}

export const getIngredients = () => async (dispatch, getState) => {
    const state = getState();
    dispatch(requestIngredients())
    const ingredientsData = await api.ingredients(state.auth.token);
    dispatch(ingredientsSuccess(ingredientsData))
}

/*
export const ingredientsFail = () => {
return {
  type: INGREDIENTS_FAIL
}
}
*/