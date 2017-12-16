import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage'
import SignUpPage from './components/pages/SignUpPage'
import HomePage from './components/pages/HomePage'
import EditUserPage from './components/pages/EditUserPage'
import EditPasswordPage from './components/pages/EditPasswordPage'

const App = () => (
<div className="ui container">
 <Route path="/"  exact component={ LoginPage }/>
 <Route path="/login" exact component={ LoginPage }/>
 <Route path="/signup" exact component={ SignUpPage }/>
 <Route path="/edit" exact component={ EditUserPage }/>
 <Route path="/reset_password" exact component={ EditPasswordPage }/>
</div>);
export default App;
