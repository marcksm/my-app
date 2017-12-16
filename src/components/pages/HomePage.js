import React from 'react'
import { Link } from 'react-router-dom'
import LoginPage from './LoginPage'

class HomePage extends React.Component {

  state = {
    data: {
      email: 'dsadsadsadsa',
      password: 'sadasdasdsadsads'
    },
    loading: false,
    errors: {}
  };


  render() {

    return (
      <div>
        <h1>Home Page</h1>
        <Link to='/login'>Login</Link>
      </div>
    );
  }

};

export default HomePage;
