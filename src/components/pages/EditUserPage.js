import React from 'react'
import { Link } from 'react-router-dom'
import EditUserForm from '../forms/EditUserForm'
//import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/authenticate';
import { Route, Redirect } from 'react-router'
import { editUserData } from "../../actions/authenticate";
import {Message} from 'semantic-ui-react'

class EditUserPage extends React.Component {
  state = {
     success: false,
     error: false
 };
  submit = data => {
    this.props.editUserData(this.props.id, data)
    .then(() =>this.props.history.push("/user"))
    .catch(res=> {this.setState({ error: true })})
  };

  render() {
    return (
      <div>
        <h1>Edit User</h1>
        {this.state.error ? (<Message>Failed - Email or phone already in use</Message>)
           : (<div></div>)}

        <EditUserForm submit={this.submit} />

        <Link to="/user" class="ui primary button">Back
        </Link>

        <Link to="/login" class="ui primary button">Delete User
        </Link>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    isAuth: !!state.user.token,
    email: state.user.email,
    first_name: state.user.first_name,
    last_name: state.user.last_name,
    personal_phone:state.user.personal_phone,
    id: state.user.id
  };
}
export default connect(mapStateToProps, {editUserData} )(EditUserPage);
