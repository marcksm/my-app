import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { login } from '../../actions/authenticate'

class LoginPage extends React.Component {
  onSetResult = (data) => {
    console.log(data)
    this.setState({
      user: data
    })
  }
  submit = data =>
    this.props.login(data)
    .then(() => this.props.history.push("/user"))
    .then();

  render() {

    return (
      <div>
      <div>
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
      </div>


      <Link to="/signup" class="ui primary button">Sign Up
      </Link>

      </div>
    );
  }
}
LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, {login})(LoginPage);
