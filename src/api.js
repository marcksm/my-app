
import axios from 'axios';

export default {
  user: {
    login: user_auth =>
      axios.post('/api/authenticate', { user_auth }).then(res => res.data.user),
    fetch: id =>
      axios.get('/api/users/' + id).then(res => res.data.user)
      }

};
