import axios from 'axios'
import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv()
const apiRoot = env.REACT_APP_API

export default class AuthAPI {

  async login(email, password) {
    const user = await axios.post(apiRoot + '/auth/login', {
      email,
      password
    });
    return user.data;
  }
}