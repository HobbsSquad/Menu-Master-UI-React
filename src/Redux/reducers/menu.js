import {
  REQUEST_DAYS,
  DAYS_SUCCESS,
  DAYS_FAIL,
  REQUEST_CURRENT_DAY,
  CURRENT_DAY_SUCCESS,
  CURRENT_DAY_FAIL
} from "../actionTypes/menu";

const initialState = {
  daysStatus: '',
  days: null,
  currentDayStatus: '',
  currentDay: null
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
    default:
      return state;
  }
}

export default menu