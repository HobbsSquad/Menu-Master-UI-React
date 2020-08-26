import {
    REQUEST_INGREDIENTS,
    INGREDIENTS_SUCCESS,
    SEND_NEW_INGREDIENT,
    NEW_INGREDIENT_SUCCESS,
    REQUEST_INGREDIENT_UPDATE,
    INGREDIENT_UPDATE_SUCCESS,
    REQUEST_INGREDIENT,
    INGREDIENT_SUCCESS,
    REQUEST_DELETE_INGREDIENT,
    DELETE_INGREDIENT_SUCCESS
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

export const requestIngredient = () => {
    return {
        type: REQUEST_INGREDIENT
    }
}

export const ingredientSuccess = (ingredient) => {
    return {
        type: INGREDIENT_SUCCESS,
        ingredient
    }
}

export const getIngredient = (ingredientId) => async (dispatch, getState) => {
    const state = getState();
    dispatch(requestIngredient())
    const ingredientData = await api.ingredient(state.auth.token, ingredientId);
    dispatch(ingredientSuccess(ingredientData))
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

export const requestIngredientUpdate = () => {
    return {
        type: REQUEST_INGREDIENT_UPDATE
    }
}

export const ingredientUpdateSuccess = (ingredients, ingredient) => {
    return {
        type: INGREDIENT_UPDATE_SUCCESS,
        ingredients,
        ingredient
    }
}

export const updateIngredient = (newGroceryItem) => async (dispatch, getState) => {
    const state = getState();
    dispatch(requestIngredientUpdate());
    const newItem = await api.updateIngredient(state.auth.token, newGroceryItem);
    const newList = state.grocery.ingredients.map(item => {
        return (item._id === newItem._id) ? newItem : item;
    });
    dispatch(ingredientUpdateSuccess(newList, newItem));
}

/*
export const ingredientUpdateFail = () => {
return {
  type: INGREDIENT_UPDATE_FAIL
}
}
*/

export const requestDeleteIngredient = () => {
    return {
        type: REQUEST_DELETE_INGREDIENT
    }
}

export const deleteIngredientSuccess = (ingredients) => {
    return {
        type: DELETE_INGREDIENT_SUCCESS,
        ingredients
    }
}

export const deleteIngredient = (groceryItemId) => async (dispatch, getState) => {
    const state = getState();
    dispatch(requestDeleteIngredient());
    await api.deleteIngredient(state.auth.token, groceryItemId);
    const newList = state.grocery.ingredients.filter(item => {
        return (item._id !== groceryItemId);
    });
    dispatch(ingredientUpdateSuccess(newList));
}

/*
export const deleteIngredientFail = () => {
return {
  type: DELETE_INGREDIENT_FAIL
}
}
*/