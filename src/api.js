
import axios from 'axios';

export default {
  user: {
    login: user_auth =>
      axios.post('/api/authenticate', { user_auth }).then(res => res.data.user),
    fetch: id =>
      axios.get('/api/users/' + id).then(res => res.data.user),
    edit: (id, body) =>
      axios.put('/api/users/' + id, body).then(res => res.data.user),
    reset_p: (id, password) =>
      axios.put ('/api/users/' + id, password).then(res =>res.data.user),
    new: (body) =>
      axios.post('/api/users', body)
  }
};
