import React from 'react'
import { Link } from 'react-router-dom'
import EditUserForm from '../forms/EditUserForm'
//import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/authenticate';
import { editUserData } from "../../actions/authenticate";
import {Message} from 'semantic-ui-react'

class EditUserPage extends React.Component {
  state = {
     success: false
 };
  submit = data => {
    this.props.editUserData(this.props.id, data)
    .then(res => {this.setState({ success: true })});
  };

  render() {
    return (
      <div>
        <h1>Edit User</h1>
        {this.state.success ? (<Message>User info has been edited</Message>)
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
