
import axios from 'axios';


export default {
	user: {
		login: (body) =>
			axios({
				method: 'POST',
				url: 'api/authenticate',
				headers: {
					'Content-Type': 'application/json'
				},
				auth: {
					username: process.env.REACT_APP_API_USER,
					password: process.env.REACT_APP_API_PASS
				},
				data: body
			}).then(res => res.data.user),
		fetch: id =>
			axios({
				method: 'GET',
				url:'/api/users/' + id,
				headers: {
					'Content-Type': 'application/json'
				},
				auth: {
					username: process.env.REACT_APP_API_USER,
					password: process.env.REACT_APP_API_PASS
				}
			}).then(res => res.data.user),
		edit: (id, body) =>
			axios({
				method: 'PUT',
				url:'/api/users/' + id +'/edit',
				auth: {
					username: process.env.REACT_APP_API_USER,
					password: process.env.REACT_APP_API_PASS
				},
				data: body
			}).then(res => res.data.user),
		reset_p: (id, body) =>
			axios({
				method: 'PUT',
				url: '/api/users/' + id + '/reset_password',
				auth: {
					username: process.env.REACT_APP_API_USER,
					password: process.env.REACT_APP_API_PASS
				},
				data: body
			}).then(res =>res.data.user),
		new: (body) =>
			axios({
				method: 'POST',
				url:'/api/users',
				auth: {
					username: process.env.REACT_APP_API_USER,
					password: process.env.REACT_APP_API_PASS
				},
				data: body
			}),
		del_user: (id) =>
			axios({
				method: 'DELETE',
				url:'/api/users/'+ id,
				auth: {
					username: process.env.REACT_APP_API_USER,
					password: process.env.REACT_APP_API_PASS
				}
			}).then(res =>res.data.user),
	}
};
