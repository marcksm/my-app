import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import {store} from '../src/index/';
import { mount } from 'enzyme';
//import { UserPage } from '../components/Component';
import configureStore from 'redux-mock-store';
import ConnectedUserPage from '../src/components/pages/UserPage';
import ConnectedSignUpPage from '../src/components/pages/SignUpPage';
import ConnectedLoginPage from '../src/components/pages/LoginPage';
import ConnectedEditUserPage from '../src/components/pages/EditUserPage';

import EditPasswordForm from '../src/components/forms/EditPasswordForm';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import user from '../src/reducers/user';
import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../src/types';
const mockStore = configureMockStore([thunk]);
const initialState = {};



describe('UserPage test props set default', () => {
	let store;
	const props = {
		isAuth: true,
		email: 'john@thevelops.com',
		first_name: 'John',
		last_name: 'Doe',
		personal_phone: '(12) 3092-1332'

	};
	store = mockStore();
	const wrapper = shallow(
		<Provider store={store}>
			<ConnectedUserPage { ...props}/>
		</Provider>
	);
	it('email has default props', () => {
		expect(wrapper.props().email).toEqual(props.email);
	});
	it('first name has default props', () => {
		expect(wrapper.props().first_name).toEqual(props.first_name);
	});
	it('last name has default props', () => {
		expect(wrapper.props().last_name).toEqual(props.last_name);
	});
	it('personal phone has default props', () => {
		expect(wrapper.props().personal_phone).toEqual(props.personal_phone);
	});
	it('authentication has defult props', () => {
		expect(wrapper.props().isAuth).toEqual(props.isAuth);
	});
});
describe('SignUpPage test props set default', () => {
	let store;
	const props = {
		isAuth: true,
		newUser: jest.fn(),
		login: jest.fn()
	};
	store = mockStore();
	const wrapper = shallow(
		<Provider store={store}>
			<ConnectedSignUpPage { ...props}/>
		</Provider>
	);
	it('authentication default props', () => {
		expect(wrapper.props().isAuth).toEqual(props.isAuth);
	});
	it('newUser function has default props', () => {
		expect(wrapper.props().newUser).toEqual(props.newUser);
	});
	it('login function has defult props', () => {
		expect(wrapper.props().login).toEqual(props.login);
	});
});
describe('LoginPage test props set default', () => {
	let store;
	const props = {
		login: jest.fn()
	};
	store = mockStore();
	const wrapper = shallow(
		<Provider store={store}>
			<ConnectedLoginPage { ...props}/>
		</Provider>
	);
	it('login function has defult props', () => {
		expect(wrapper.props().login).toEqual(props.login);
	});
});
describe('EditUserPage test props set default', () => {
	let store;
	const props = {
		isAuth: true,
		userDelete: jest.fn(),
		editUserData: jest.fn()
	};
	store = mockStore();
	const wrapper = shallow(
		<Provider store={store}>
			<ConnectedEditUserPage { ...props}/>
		</Provider>
	);
	it('editUserData function has defult props', () => {
		expect(wrapper.props().editUserData).toEqual(props.editUserData);
	});
	it('editUserData function has defult props', () => {
		expect(wrapper.props().userDelete).toEqual(props.userDelete);
	});
	
});
