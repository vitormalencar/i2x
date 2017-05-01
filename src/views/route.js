import {h, Component} from 'preact'
import {Router, route} from 'preact-router';
import {isUserAuthenticated} from '../utils/auth';

// Pages
import Home from './pages/home';
import Login from './pages/login';
import Layout from './components/layout';
import Error404 from './pages/errors/404';

// high order component to wrap a given route in an auth check
class AuthenticatedRoute extends Component {
	componentWillMount() {
		let {check, login} = this.props;

		this.allowed = isUserAuthenticated();

		if (!this.allowed) 
			route(login || '/');
	}

	render({
		check,
		login,
		route: Route,
		...props
	}) {
		return <div>{this.allowed && <Route {...props}/>}</div>;
	}
}

const App = () => (
	<Router>
		<Login path="/"/>
		<Login path="/login"/>
		<Error404 default/>
		<AuthenticatedRoute
			path="/home"
			login="/login"
			route={Home}
			check={isUserAuthenticated}/>
	</Router>
);

export default App;
