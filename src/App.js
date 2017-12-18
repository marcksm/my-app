import React from 'react';
import LoginPage from './components/pages/LoginPage'
import SignUpPage from './components/pages/SignUpPage'
import EditUserPage from './components/pages/EditUserPage'
import EditPasswordPage from './components/pages/EditPasswordPage'
import UserPage from './components/pages/UserPage'
import UserRoute from './components/routes/UserRoute'
import NotLogRoute from './components/routes/NotLogRoute'
import PropTypes from 'prop-types'
const App = ({location}) => (
<div className="ui container">
 <NotLogRoute location = {location} path="/"  exact component={ LoginPage }/>
 <NotLogRoute location = {location} path="/login" exact component={ LoginPage }/>
 <NotLogRoute location = {location} path="/signup" exact component={ SignUpPage }/>
 <UserRoute location = {location} path="/edit" exact component={ EditUserPage }/>
 <UserRoute location = {location} path="/reset_password" exact component={ EditPasswordPage }/>
 <UserRoute location = {location} path="/user" exact component={ UserPage }/>
</div>);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
