import {
    REQUEST_DAYS,
    DAYS_SUCCESS,
    REQUEST_CURRENT_DAY,
    CURRENT_DAY_SUCCESS,
    REQUEST_NEW_DAY,
    NEW_DAY_SUCCESS,
    REQUEST_MEALS,
    MEALS_SUCCESS,
    REQUEST_UPDATE_DAY,
    UPDATE_DAY_SUCCESS
} from '../actionTypes/menu';
import MenuApi from '../../API/menu';

const api = new MenuApi();

export const requestDays = () => {
    return {
        type: REQUEST_DAYS
    }
}

export const daysSuccess = (days) => {
    return {
        type: DAYS_SUCCESS,
        days
    }
}

export const getDays = () => async (dispatch, getState) => {
    const state = getState();
    dispatch(requestDays())
    const menuData = await api.days(state.auth.token);
    dispatch(daysSuccess(menuData))
}

/*
export const daysFail = () => {
return {
  type: DAYS_FAIL
}
}
*/

export const requestCurrentDay = () => {
    return {
        type: REQUEST_CURRENT_DAY
    }
}

export const currentDaySuccess = (currentDay) => {
    return {
        type: CURRENT_DAY_SUCCESS,
        currentDay
    }
}

export const getCurrentDay = (dayId) => async (dispatch, getState) => {
    const state = getState();
    dispatch(requestCurrentDay())
    const menuData = await api.day(state.auth.token, dayId)
    dispatch(currentDaySuccess(menuData))
}

/*
export const dayFail = () => {
return {
  type: DAY_FAIL
}
}
*/

export const requestNewDay = () => {
    return {
        type: REQUEST_NEW_DAY
    }
}

export const newDaySuccess = (days) => {
    return {
        type: NEW_DAY_SUCCESS,
        days
    }
}

export const newDay = (newDay) => async (dispatch, getState) => {
    const state = getState();
    dispatch(requestNewDay());
    const dayData = await api.newDay(state.auth.token, newDay);
    const newDays = [...state.menu.days];
    newDays.push(dayData);
    dispatch(newDaySuccess(newDays));
}

/*
export const newDayFail = () => {
return {
  type: NEW_DAY_FAIL
}
}
*/

export const requestMeals = () => {
    return {
        type: REQUEST_MEALS
    }
}

export const mealsSuccess = (meals) => {
    return {
        type: MEALS_SUCCESS,
        meals
    }
}

export const getMeals = () => async (dispatch, getState) => {
    const state = getState();
    dispatch(requestMeals());
    const mealsData = await api.getMeals(state.auth.token);
    dispatch(mealsSuccess(mealsData));
}

/*
export const mealsFail = () => {
return {
  type: MEALS_FAIL
}
}
*/

export const requestUpdateDay = () => {
    return {
        type: REQUEST_UPDATE_DAY
    }
}

export const updateDaySuccess = (currentDay, days) => {
    return {
        type: UPDATE_DAY_SUCCESS,
        currentDay,
        days
    }
}

export const updateDay = (newDay) => async (dispatch, getState) => {
    const state = getState();
    dispatch(requestUpdateDay());
    await api.updateDay(state.auth.token, newDay)
    let newDays = [...state.menu.days];
    newDays = newDays.map(item => {
        return item._id === newDay._id ? newDay : item;
    })
    dispatch(updateDaySuccess(newDay, newDays));
}

/*
export const updateDayFail = () => {
return {
  type: UPDATE_DAY_FAIL
}
}
*/