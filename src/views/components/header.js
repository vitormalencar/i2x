import {h} from 'preact';
import { Link, route } from 'preact-router';
import {deauthenticateUser} from '../../utils/auth';

const logout = () => {
	deauthenticateUser()
	route('/')
}

const Header = () => (
	<header class="header">
		<h1>I2X</h1>
		<nav>
			<a href='#' onClick={logout}>Logout</a>
		</nav>
	</header>
);

export default Header;
