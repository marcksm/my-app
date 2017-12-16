import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage'
import SignUpPage from './components/pages/SignUpPage'
import HomePage from './components/pages/HomePage'

const App = () => (
<div className="ui container">
 <Route path="/"  exact component={ LoginPage }/>
 <Route path="/login" exact component={ LoginPage }/>
 <Route path="/signup" exact component={ SignUpPage }/>
</div>);
export default App;
