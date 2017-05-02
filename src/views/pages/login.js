import {h, Component} from 'preact';
import {route} from 'preact-router';

import {login} from '../../core/api';
import {authenticateUser, isUserAuthenticated} from '../../utils/auth';

import Card from '../components/card';
import logo from '../../static/img/i2x-logo-dark.png';

export default class Login extends Component {

	state = {
		email: 'challenge@i2x.ai',
		password: 'pass123'
	};

	handleInputChange = (e) => {
		e.preventDefault();
		const value = e.target.value;
		const name = e.target.name;
		this.setState({[name]: value});
	};

	redirect = () => route('/home');

	handleSubmit = (e) => {
		e.preventDefault();

		let email = this.state.email;
		let password = this.state.password;

		if (email && password) {
			login(email, password)
				.then((response) => authenticateUser(response.data.token))
				.then(response => this.redirect())
				.catch(error => console.log(error));
		}else{
			alert('email and password required');
		}
	};

	componentWillMount() {
		let isLoggedIn = isUserAuthenticated();
		// redirect if the user is logged in
		if (isLoggedIn)
			this.redirect();
	}

	// pass state to render
	render({},{email,password}) {
		return (
			<div className="page page__login">

				<img alt='logo' class='logo' src={logo}/>

				<form class='login-form' action="">
					<label for="email">
						E-mail
						<input
							id='email'
							type='email'
							name='email'
							placeholder='E-mail'
							value={email}
							onChange={this.handleInputChange}/>
					</label>

					<label for="password">
						Password
						<input
							id='password'
							type='password'
							name='password'
							value={password}
							placeholder='password'
							onChange={this.handleInputChange}/>
					</label>

					<br/>
					<button class='button button-block' onClick={this.handleSubmit}>Login</button>
				</form>
			</div>
		);
	}
}
