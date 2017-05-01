import {h} from 'preact';
import Header from './header';

const Layout = ({children}) => (
	<div id="app">
		<Header/>
		<main id="content">
			{children}
		</main>
	</div>
);

export default Layout;
