import axios from 'axios'
import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv()
const apiRoot = env.REACT_APP_API

export default class MenuAPI {

  async days(token) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const days = await axios.get(apiRoot + '/day', options);
    return days.data;
  }

  async day(token, dayId) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const day = await axios.get(apiRoot + '/day/' + dayId, options);
    return day.data;
  }

  async newDay(token, newDay) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const day = await axios.post(apiRoot + '/day', newDay, options);
    return day.data;
  }

  async getMeals(token) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const meals = await axios.get(apiRoot + '/meal', options);
    return meals.data;
  }
}