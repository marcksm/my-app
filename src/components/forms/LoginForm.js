import React from 'react';
import {Form, Button } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import Validator from 'validator';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  onChange = e => this.setState({
    data : { ...this.state.data, [e.target.name]: e.target.value}
  });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors});
  }

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) {
      errors.email = "Invalid email"
    }
    if (!data.password) {
      errors.password = "Password can't be blank";
    }
    else if (data.password.length < 6) {
      errors.password = "Password must have at least 6 characters";
    }
    return errors;
  }

  render() {
    const {data, errors} = this.state;
    return (
      <div>
      <Form onSubmit={this.onSubmit}>
        <Form.Field error= {!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="teste@teste.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*************"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button primary>Login</Button>

      </Form>
      <br/>
        <Button primary>Sign Up</Button>
      </div>
    );
  }
}

export default LoginForm;