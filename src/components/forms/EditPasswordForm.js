import React from 'react';
import {Form, Button } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';
import Validator from 'validator';


class EditPasswordForm extends React.Component {
	state = {
		data: {
			old_password: '',
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
		if (!data.old_password) {
			errors.old_password = "Password can't be blank.";
		}
		else if (data.old_password.length < 6) {
			errors.old_password = "Password must have at least 6 characters";
		}
		if (!data.password || !data.password_confirmation) {
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
					<Form.Field error={!!errors.old_password}>
						<label htmlFor="old_password">Old Password</label>
						<input
							type="password"
							id="old_password"
							name="old_password"
							placeholder="old password"
							value={data.old_password}
							onChange={this.onChange}
						/>
						{errors.old_password && <InlineError text={errors.old_password} />}
					</Form.Field>
					<Form.Field error={!!errors.password}>
						<label htmlFor="password">New Password</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="new password"
							value={data.password}
							onChange={this.onChange}
						/>
						{errors.password && <InlineError text={errors.password} />}
					</Form.Field>
					<Form.Field error={!!errors.password}>
						<label htmlFor="password_confirmation">New Password Confirmation</label>
						<input
							type="password"
							id="password_confirmation"
							name="password_confirmation"
							placeholder="re-type new password"
							value={data.password_confirmation}
							onChange={this.onChange}
						/>
						{errors.password_confirmation && <InlineError text={errors.password_confirmation} />}
					</Form.Field>
					<Button primary>Submit</Button>
				</Form>
				<br/>
			</div>
		);
	}
}

EditPasswordForm.propTypes = {
	submit: PropTypes.func.isRequired
};

export default EditPasswordForm;
