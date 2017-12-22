import React from 'react';
import { Link } from 'react-router-dom';
import EditPasswordForm from '../forms/EditPasswordForm';
import { connect } from 'react-redux';
import { editPassData } from "../../actions/authenticate";
import {Message} from 'semantic-ui-react';

class EditPasswordPage extends React.Component {

	state = {
		 success: false,
		 error: false
 	};
	submit = data => {
		this.props.editPassData(this.props.id, data)
			.then(() => this.props.history.push("/user"))
			.catch(res=> {this.setState({ error: true });});
	};

	render() {
		return (
			<div>
				<div>
			 {this.state.error ? (<div>
				 <Message>Failed - the password you entered is wrong</Message>
				 </div>
					)	: (<div></div>)}
				</div>
				<h1>Edit Password</h1>
				<EditPasswordForm submit={this.submit} />
				<Link to="/user" class="ui primary button">Back
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

export default connect(mapStateToProps, {editPassData} )(EditPasswordPage);
