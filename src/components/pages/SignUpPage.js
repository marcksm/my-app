import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../forms/SignUpForm';
import {Message} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { newUser } from "../../actions/authenticate";
import { login } from '../../actions/authenticate';

class SignUpPage extends React.Component {
	state = {
		 success: false,
		 error: false,
		 loading: true
	};

	submit = data => {
		this.props.newUser(data)
			.then(res => {this.props.login(data);})
			.catch(ress=> {this.setState({ error: true });});
	};

	render() {
		return (
			<div>
				<h1>SignUp Page</h1>
				{!this.state.loading ? ( <div></div>)
					 : (<div></div>)}

				{this.state.error ? (<Message>Failed - Email or phone already in use</Message>)
					 : (<div></div>)}
				<SignUpForm submit={this.submit} />
				<Link to="/login" class="ui primary button">Back
				</Link>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		isAuth: !!state.user.token,
		email: state.user.email,
		first_name: state.user.first_name,
		last_name: state.user.last_name,
		personal_phone:state.user.personal_phone,
		id: state.user.id
	};
}

export default connect(mapStateToProps, {newUser, login} )(SignUpPage);
