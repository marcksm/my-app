import React from 'react';
import { Link } from 'react-router-dom';


class UserPage extends React.Component {
  state = {
    data: {
      first_name: 'Marcos',
      last_name: 'Sousa',
      email: 'marcos.vinicius.wz@gmail.com',
      personal_phone: '(11) 92465-46468',
      password: '',
      password_confirmation: ''

    },
    loading: false,
    errors: {}
  };
  render() {

    return (
      <div>
      <div>
        <h1>Get User</h1>
      </div>
      <ul>{this.state.data.email}</ul><hr/>
      <ul>{this.state.data.first_name}</ul><hr/>
      <ul>{this.state.data.last_name}</ul><hr/>
      <ul>{this.state.data.personal_phone}</ul><hr/>
      <Link to="/edit" class="ui primary button">Edit User
      </Link><br/><br/>
      <Link to="/reset_password" class="ui primary button">Edit Password
      </Link><br/><br/>
      <Link to="/login" class="ui primary button">Logout
      </Link><br/><br/>

      </div>
    );
  }
}


export default UserPage;
