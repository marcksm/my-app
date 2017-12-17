import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/authenticate';


const UserPage = ({isAuth, email, first_name, last_name, personal_phone, logout}) => (
      <div>
      <div>
        <h1>Get User</h1>
      </div>
      <ul>{isAuth ? <button> Logout</button> : <button> ut</button>}</ul><hr/>
      <ul>{last_name}</ul><hr/>
      <ul>{email}</ul><hr/>
      <ul>{personal_phone}</ul><hr/>
      <Link to="/edit" class="ui primary button">Edit User
      </Link><br/><br/>
      <Link to="/reset_password" class="ui primary button">Edit Password
      </Link><br/><br/>
      <button onClick={() => logout()}class="ui primary button">Logout</button>
      <br/><br/>

      </div>
);

UserPage.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  personal_phone: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps (state) {
  return {
    isAuth: !!state.user.token,
    email: state.user.email,
    first_name: state.user.first_name,
    last_name: state.user.last_name,
    personal_phone:state.user.personal_phone
  };
}

export default connect(mapStateToProps, {logout: actions.logout})(UserPage);
