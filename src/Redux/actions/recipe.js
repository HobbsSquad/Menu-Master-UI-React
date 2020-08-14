import { REQUEST_RECIPES,
         RECIPES_SUCCESS,
         REQUEST_CURRENT_RECIPE,
         CURRENT_RECIPE_SUCCESS } from '../actionTypes/recipe';
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