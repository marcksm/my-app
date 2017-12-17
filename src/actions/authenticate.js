import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import api from '../api';

export const loggedin = user => ({
  type: USER_LOGGED_IN,
  user
});
export const loggedout = () => ({
  type: USER_LOGGED_OUT
});

export const login = user_auth => dispatch =>
 api.user.login(user_auth).then(user => {
   localStorage.Token = user.token;
   dispatch(loggedin(user));
 });

 export const logout = () => dispatch => {
    localStorage.removeItem('Token');
    dispatch(loggedout());
  };
