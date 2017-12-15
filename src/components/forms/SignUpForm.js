import React from 'react';
import {Form, Button } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';
import Validator from 'validator';
//import Phone from 'react-phone-number-input'
//import rrui from 'react-phone-number-input/rrui.css'
//import rpni from 'react-phone-number-input/style.css'

class SignUpForm extends React.Component {
  state = {
    data: {
      first_name: '',
      last_name: '',
      email: '',
      personal_phone: '',
      password: '',
      password_confirmation: ''

    },
    loading: false,
    errors: {}
  };

  isValid = (errors) => {
    if (Object.keys(errors).length === 0 && errors.constructor === Object) return true;
    return false;
  };

  onChange = e => this.setState({
    data : { ...this.state.data, [e.target.name]: e.target.value}
  });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if (this.isValid(errors)) {
      this.props.submit(this.state.data);
    }
  };

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) {
      errors.email = "Invalid email."
    }
    if (Validator.isEmpty(data.first_name) || !Validator.isAlpha(data.first_name)) {
      errors.first_name = "Invalid first name."
    }
    if (Validator.isEmpty(data.first_name)|| !Validator.isAlpha(data.last_name)) {
      errors.last_name = "Invalid last name."
    }
    if (Validator.isEmpty(data.personal_phone)|| !Validator.isNumeric(data.personal_phone)) {
      errors.personal_phone = "Invalid phone number."
    }
    if (!data.password) {
      errors.password = "Password can't be blank.";
    }
    else if (!Validator.equals(data.password, data.password_confirmation)) {
      errors.password = "Password does not match.";
    }
    else if (data.password.length < 6) {
      errors.password = "Password must have at least 6 characters";
    }
    return errors;
  };

  render() {
    const {data, errors} = this.state;
    return (
      <div>
      <Form onSubmit={this.onSubmit}>
      <Form.Field error= {!!errors.first_name}>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          placeholder="John"
          value={data.first_name}
          onChange={this.onChange}
        />
        {errors.first_name && <InlineError text={errors.first_name} />}
      </Form.Field>
      <Form.Field error= {!!errors.last_name}>
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Doe"
          value={data.last_name}
          onChange={this.onChange}
        />
        {errors.last_name && <InlineError text={errors.last_name} />}
      </Form.Field>
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
        <Form.Field error= {!!errors.personal_phone}>
          <label htmlFor="personal_phone">Personal Phone</label>
          <input
            type="tel"
            id="personal_phone"
            name="personal_phone"
            placeholder="(11) 97169-6297"
            value={data.personal_phone}
            onChange={this.onChange}
          />

          {errors.personal_phone && <InlineError text={errors.personal_phone} />}
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
        <Form.Field error={!!errors.password}>
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            placeholder="*************"
            value={data.password_confirmation}
            onChange={this.onChange}
          />
          {errors.password_confirmation && <InlineError text={errors.password_confirmation} />}
        </Form.Field>
        <Button primary>Submit</Button>
      </Form>
      <br/>

        <Button primary>Back </Button>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignUpForm;
