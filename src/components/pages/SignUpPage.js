import React from 'react'
//import { Link } from 'react-router-dom'
import SignUpForm from '../forms/SignUpForm'


class SignUpPage extends React.Component {

  submit = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>SignUp Page</h1>
        <SignUpForm submit={this.submit} />
      </div>
    );
  }
}


export default SignUpPage;
