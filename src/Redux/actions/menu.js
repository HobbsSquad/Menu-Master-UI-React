import { REQUEST_DAYS,
         DAYS_SUCCESS,
         REQUEST_CURRENT_DAY,
         CURRENT_DAY_SUCCESS } from '../actionTypes/menu';
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