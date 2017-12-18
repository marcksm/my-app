import React from 'react'
import { Link } from 'react-router-dom'
import EditUserForm from '../forms/EditUserForm'
//import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import { editUserData } from "../../actions/authenticate";
import { userDelete } from "../../actions/authenticate";
import { logout } from "../../actions/authenticate";
import {Message} from 'semantic-ui-react'
import PropTypes from 'prop-types'


class EditUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
       success: false,
       error: false,
       delete: false,
       delete_error: false,
       loading: true
   };
  }

  submit = data => {
    this.props.editUserData(this.props.id, data)
    .then(() =>this.props.history.push("/user"))
    .catch(res=> {this.setState({ error: true })})
  };

  deleteUser = (id, state) => {
    console.log(this.props)
    this.props.userDelete(id)
    .then(state())
    .catch(res => {this.setState({ delete_error: true })})
  };

  render() {
    return (
      <div>
        <h1>Edit User</h1>
        {!this.state.loading ? ( <Redirect to="/"/>)
           : (<div></div>)}
        {this.state.error ? (<Message>Failed - Email or phone already in use</Message>)
           : (<div></div>)}
        {this.state.delete_error ? (<Message>Failed - Failed to delete</Message>)
          : (<div></div>)}
        <EditUserForm submit={this.submit} />
        <Link to="/user" class="ui primary button">Back
        </Link>
        <button onClick={() =>{this.deleteUser(this.props.id, this.props.logout)}}class="ui primary button">Delete User
        </button>
      </div>
    );
  }
}

EditUserPage.propTypes = {
  userDelete: PropTypes.func.isRequired
};

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
export default connect(mapStateToProps, {logout, editUserData, userDelete} )(EditUserPage);
