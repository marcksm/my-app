import React from 'react'
import { Link } from 'react-router-dom'
import EditPasswordForm from '../forms/EditPasswordForm'
//import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/authenticate';
import { editPassData } from "../../actions/authenticate";
import {Message} from 'semantic-ui-react'

class EditPasswordPage extends React.Component {

  state = {
     success: false
 };
  submit = data => {
    console.log(data);
    console.log(this.state)
    console.log(this.props);
    this.props.editPassData(this.props.id, data)
    .then(res => {this.setState({ success: true })});
  };

  render() {
    return (
      <div>
      <div>
       {this.state.success ? (<Message>Password has been reseted</Message>)
          : (<div></div>)}
</div>
        <h1>Edit Password</h1>
        <EditPasswordForm submit={this.submit} />
        <Link to="/user" class="ui primary button">Back
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

export default connect(mapStateToProps, {editPassData} )(EditPasswordPage);
