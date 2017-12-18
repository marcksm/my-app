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
   localStorage.Id = user.id;
   dispatch(loggedin(user));
 });

 export const logout = () => dispatch => {
    localStorage.removeItem('Token');
    localStorage.removeItem('Id');
    dispatch(loggedout());
  };

  export const fetchUserData = (id) => dispatch =>
    api.user
      .fetch(id);

  export const editUserData = (id, body) => dispatch =>
    api.user
      .edit(id, body);

  export const editPassData = (id, password) => dispatch =>
    api.user
    .reset_p(id, password);
    
  export const newUser = (id, body) => dispatch =>
    api.user
      .new(id, body);
