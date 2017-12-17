import { USER_LOGGED_IN } from '../types';
import api from '../api';

export const loggedin = user => ({
  type: USER_LOGGED_IN,
  user
});

export const login = user_auth => dispatch =>
 api.user.login(user_auth).then(user => dispatch(loggedin(user)));
