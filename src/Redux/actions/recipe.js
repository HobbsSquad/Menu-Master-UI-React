import {
    REQUEST_RECIPES,
    RECIPES_SUCCESS,
    REQUEST_CURRENT_RECIPE,
    CURRENT_RECIPE_SUCCESS,
    SEND_NEW_RECIPE,
    NEW_RECIPE_SUCCESS,
    REQUEST_RECIPE_UPDATE,
    UPDATE_RECIPE_SUCCESS,
    REQUEST_DELETE_RECIPE,
    DELETE_RECIPE_SUCCESS
} from '../actionTypes/recipe';

import RecipeAPI from '../../API/recipe';

const api = new RecipeAPI();

export const requestRecipes = () => {
    return {
        type: REQUEST_RECIPES
    }
}

export const recipesSuccess = (recipes) => {
    return {
        type: RECIPES_SUCCESS,
        recipes
    }
}

export const getRecipes = () => async (dispatch, getState) => {
    const state = getState();
    dispatch(requestRecipes())
    const recipeData = await api.recipes(state.auth.token);
    dispatch(recipesSuccess(recipeData))
}

/*
export const recipesFail = () => {
return {
  type: RECIPES_FAIL
}
}
*/

export const requestCurrentRecipe = () => {
    return {
        type: REQUEST_CURRENT_RECIPE
    }
}

export const currentRecipeSuccess = (currentRecipe) => {
    return {
        type: CURRENT_RECIPE_SUCCESS,
        currentRecipe
    }
}

export const getCurrentRecipe = (recipeId) => async (dispatch, getState) => {
    const state = getState();
    dispatch(requestCurrentRecipe())
    const recipeData = await api.recipe(state.auth.token, recipeId)
    dispatch(currentRecipeSuccess(recipeData))
}

/*
export const recipeFail = () => {
return {
  type: RECIPE_FAIL
}
}
*/

export const sendNewRecipe = () => {
    return {
        type: SEND_NEW_RECIPE
    }
}

export const newRecipeSuccess = (recipes) => {
    return {
        type: NEW_RECIPE_SUCCESS,
        recipes
    }
}

export const newRecipe = (newRecipeItem) => async (dispatch, getState) => {
    const state = getState();
    dispatch(sendNewRecipe());
    const newItem = await api.newRecipe(state.auth.token, newRecipeItem);
    const newList = state.recipe.recipes;
    newList.push(newItem);
    dispatch(newRecipeSuccess(newList));
}

/*
export const newRecipeFail = () => {
return {
  type: NEW_RECIPE_FAIL
}
}
*/

export const requestRecipeUpdate = () => {
    return {
        type: REQUEST_RECIPE_UPDATE
    }
}

export const updateRecipeSuccess = (currentRecipe, recipes) => {
    return {
        type: UPDATE_RECIPE_SUCCESS,
        currentRecipe,
        recipes
    }
}

export const updateRecipe = (newRecipeItem) => async (dispatch, getState) => {
    const state = getState();
    dispatch(requestRecipeUpdate());
    const newItem = await api.updateRecipe(state.auth.token, newRecipeItem);
    const newList = state.recipe.recipes.map(item => {
        return (item._id === newItem._id) ? newItem : item;
    });
    dispatch(updateRecipeSuccess(newItem, newList));
}

/*
export const updateRecipeFail = () => {
return {
  type: UPDATE_RECIPE_FAIL
}
}
*/

export const requestDeleteRecipe = () => {
    return {
        type: REQUEST_DELETE_RECIPE
    }
}

export const deleteRecipeSuccess = (recipes) => {
    return {
        type: DELETE_RECIPE_SUCCESS,
        recipes
    }
}

export const deleteRecipe = (recipeId) => async (dispatch, getState) => {
    const state = getState();
    dispatch(requestDeleteRecipe());
    await api.deleteRecipe(state.auth.token, recipeId);
    const newList = state.recipe.recipes.filter(item => {
        return item._id !== recipeId;
    });
    dispatch(deleteRecipeSuccess(newList));
}

/*
export const deleteRecipeFail = () => {
return {
  type: DELETE_RECIPE_FAIL
}
}
*/