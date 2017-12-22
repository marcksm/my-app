import React from 'react';
import ReactDOM from 'react-dom';
import EditPasswordPage from '../src/components/pages/EditPasswordPage';

it('renders without crashing', () => {
	const component = shallow(
		<EditPasswordPage />
	);
	expect(component).toHaveLength(1);
});
