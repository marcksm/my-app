import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/authenticate';
import { fetchUserData } from "../../actions/authenticate";
import {Message} from 'semantic-ui-react'

function logout2() {
  localStorage.removeItem('Token');
  localStorage.removeItem('Id');
  window.location.reload();
  console.log(this.state);
}

class UserPage extends React.Component
{
  constructor(props) {
  super(props);

  this.state = {
    user: {},
    success: false
  };
}
    componentDidMount() {
      console.log(this.props.location.state)
      this.props.fetchUserData(localStorage.Id).then(data => this.setState({ user: data }));
    }

render() {
  const {isAuth} = this.props
  const { email, first_name, last_name, personal_phone, logout, id} = this.state.user
    return (
      <div>
      {this.props.location.state ? (<div>
        <Message>{this.props.location.state.message}</Message>

   </div>
     )
         : (<div></div>)}
      <div>
        <h1>Get User</h1>
      </div>

      <div class="ui large message">
      {email}
      </div>

      <div class="ui large message">
      {first_name}
      </div>

      <div class="ui large message">
      {last_name}
      </div>

      <div class="ui large message">
      {personal_phone}
      </div>
      <Link to="/edit" class="ui primary button">Edit User
      </Link><br/><br/>
      <Link to="/reset_password" class="ui primary button">Edit Password
      </Link><br/><br/>
      <button onClick={() => logout2()}class="ui primary button">Logout</button>
      <br/><br/>

      </div>
    );
  }
};

UserPage.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  personal_phone: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
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

export default connect(mapStateToProps, {logout: actions.logout, fetchUserData })(UserPage);
