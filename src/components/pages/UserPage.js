import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/authenticate';
import { fetchUserData } from "../../actions/authenticate";

function logout2() {
  localStorage.removeItem('Token');
  localStorage.removeItem('Id');
  window.location.reload();
}

class UserPage extends React.Component
{
  constructor(props) {
  super(props);

  this.state = {
    user: {},
  };
}
    //axios.get(API + this.props.id)
//  .then(res => res)
//  .then(data => this.setState({ user: data.data.user }, console.log(data.data.user)));
    componentDidMount() {
      this.props.fetchUserData(this.props.id).then(data => this.setState({ user: data }));
    }

render() {
  const {isAuth} = this.props
  const { email, first_name, last_name, personal_phone, logout, id} = this.state.user
    return (
      <div>
      <div>
        <h1>Get User</h1>
      </div>
      <ul>{last_name}</ul><hr/>
      <ul>{email}</ul><hr/>
      <ul>{id}</ul><hr/>
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
