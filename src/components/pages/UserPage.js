import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/authenticate';


class UserPage extends React.Component
{
render() {
   const {isAuth, email, first_name, last_name, personal_phone, logout, id} = this.props
    return (
      <div>
      <div>
        <h1>Get User</h1>
      </div>
      <ul>{isAuth ? <button> Logout</button> : <button> ut</button>}</ul><hr/>
      <ul>{last_name}</ul><hr/>
      <ul>{email}</ul><hr/>
      <ul>{id}</ul><hr/>
      <Link to="/edit" class="ui primary button">Edit User
      </Link><br/><br/>
      <Link to="/reset_password" class="ui primary button">Edit Password
      </Link><br/><br/>
      <button onClick={() => logout()}class="ui primary button">Logout</button>
      <br/><br/>

      </div>
    );
  }
};

UserPage.propTypes = {
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

export default connect(mapStateToProps, {logout: actions.logout})(UserPage);
