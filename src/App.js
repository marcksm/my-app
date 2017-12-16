import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage'
import SignUpPage from './components/pages/SignUpPage'
import EditUserPage from './components/pages/EditUserPage'
import EditPasswordPage from './components/pages/EditPasswordPage'
import UserPage from './components/pages/UserPage'

const App = () => (
<div className="ui container">
 <Route path="/"  exact component={ LoginPage }/>
 <Route path="/login" exact component={ LoginPage }/>
 <Route path="/signup" exact component={ SignUpPage }/>
 <Route path="/edit" exact component={ EditUserPage }/>
 <Route path="/reset_password" exact component={ EditPasswordPage }/>
 <Route path="/user" exact component={ UserPage }/>
</div>);
export default App;
