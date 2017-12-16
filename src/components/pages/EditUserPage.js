import React from 'react'
import { Link } from 'react-router-dom'
import EditUserForm from '../forms/EditUserForm'
//import { Route } from 'react-router-dom';

class EditUserPage extends React.Component {

  submit = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Edit User</h1>
        <EditUserForm submit={this.submit} />

        <Link to="/dashboard" class="ui primary button">Back
        </Link>
        <Link to="/login" class="ui primary button">Delete User
        </Link>
      </div>
    );
  }
}


export default EditUserPage;
