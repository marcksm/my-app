import React from 'react'
import { Link } from 'react-router-dom'
import EditPasswordForm from '../forms/EditPasswordForm'
//import { Route } from 'react-router-dom';

class EditPasswordPage extends React.Component {

  submit = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Edit Password</h1>
        <EditPasswordForm submit={this.submit} />
        <Link to="/user" class="ui primary button">Back
        </Link>
      </div>
    );
  }
}


export default EditPasswordPage;
