import {
  REQUEST_DAYS,
  DAYS_SUCCESS,
  DAYS_FAIL,
  REQUEST_CURRENT_DAY,
  CURRENT_DAY_SUCCESS,
  CURRENT_DAY_FAIL,
  REQUEST_NEW_DAY,
  NEW_DAY_SUCCESS,
  NEW_DAY_FAIL,
  REQUEST_MEALS,
  MEALS_SUCCESS,
  MEALS_FAIL,
  REQUEST_UPDATE_DAY,
  UPDATE_DAY_SUCCESS,
  UPDATE_DAY_FAIL
} from "../actionTypes/menu";

const initialState = {
  daysStatus: '',
  days: null,
  currentDayStatus: '',
  currentDay: null,
  newDayStatus: '',
  mealsStatus: '',
  meals: null,
  updateDayStatus: ''
};

const menu = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DAYS: {
      return {
        ...state,
        daysStatus: 'requestingDays'
      }
    }
    case DAYS_SUCCESS: {
      return {
        ...state,
        daysStatus: 'daysLoaded',
        days: action.days
      }
    }
    case DAYS_FAIL: {
      return {
        ...state,
        daysStatus: 'daysFailed',
        days: null
      }
    }
    case REQUEST_CURRENT_DAY: {
      return {
        ...state,
        currentDayStatus: 'requestingCurrentDay'
      }
    }
    case CURRENT_DAY_SUCCESS: {
      return {
        ...state,
        currentDayStatus: 'currentDayLoaded',
        currentDay: action.currentDay
      }
    }
    case CURRENT_DAY_FAIL: {
      return {
        ...state,
        currentDayStatus: 'currentDayFailed',
        currentDay: null
      }
    }
    case REQUEST_NEW_DAY: {
      return {
        ...state,
        newDayStatus: 'requestingNewDay'
      }
    }
    case NEW_DAY_SUCCESS: {
      return {
        ...state,
        newDayStatus: 'newDaySuccess',
        days: action.days
      }
    }
    case NEW_DAY_FAIL: {
      return {
        ...state,
        newDayStatus: 'newDayFail'
      }
    }
    case REQUEST_MEALS: {
      return {
        ...state,
        mealsStatus: 'requestingMeals'
      }
    }
    case MEALS_SUCCESS: {
      return {
        ...state,
        mealsStatus: 'mealsSuccess',
        meals: action.meals
      }
    }
    case MEALS_FAIL: {
      return {
        ...state,
        mealsStatus: 'mealsFail'
      }
    }
    case REQUEST_UPDATE_DAY: {
      return {
        ...state,
        updateDayStatus: 'requestingUpdateDay'
      }
    }
    case UPDATE_DAY_SUCCESS: {
      return {
        ...state,
        updateDayStatus: 'updateDaySuccess',
        currentDay: action.currentDay,
        days: action.days
      }
    }
    case UPDATE_DAY_FAIL: {
      return {
        ...state,
        updateDayStatus: 'updateDayFail'
      }
    }
    default:
      return state;
  }
}

export default menu