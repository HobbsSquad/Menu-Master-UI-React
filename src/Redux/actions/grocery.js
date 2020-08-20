import {
    REQUEST_INGREDIENTS,
    INGREDIENTS_SUCCESS,
    SEND_NEW_INGREDIENT,
    NEW_INGREDIENT_SUCCESS
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

export const sendNewIngredient = () => {
    return {
        type: SEND_NEW_INGREDIENT
    }
}

export const newIngredientSuccess = (ingredients) => {
    return {
        type: NEW_INGREDIENT_SUCCESS,
        ingredients
    }
}

export const newIngredient = (newGroceryItem) => async (dispatch, getState) => {
    const state = getState();
    dispatch(sendNewIngredient());
    const newItem = await api.newIngredient(state.auth.token, newGroceryItem);
    const newList = state.grocery.ingredients;
    newList.push(newItem);
    dispatch(newIngredientSuccess(newList));
}

/*
export const newIngredientFail = () => {
return {
  type: NEW_INGREDIENT_FAIL
}
}
*/