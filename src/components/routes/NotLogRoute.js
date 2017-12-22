import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

const NotLogRoute = ({isAuth, component: Component, ...rest}) => (
	<Route {...rest} render=
		{props => !isAuth ?  <Component {...props}/>:
			<Redirect to="/user"/>
		}/>
);

NotLogRoute.propTypes = {
	component: PropTypes.func.isRequired,
	isAuth: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	return {
		isAuth: !!state.user.token
	};
}

export default connect(mapStateToProps)(NotLogRoute);
