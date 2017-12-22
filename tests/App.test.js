import React from 'react';
import ReactDOM from 'react-dom';
import UserRoute from './src/App';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<UserRoute/>, div);
});
