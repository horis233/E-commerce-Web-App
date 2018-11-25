import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';

import App from './components/App';
import Navbar from "./components/Navbar";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Checkout from './components/Checkout';

import registerServiceWorker from './registerServiceWorker';

const Root = () => (
    <Navbar />
	<Router>
		<Switch>
			<Route component={App} exact path="/" />
			<Route component={Signin} path="/signin" />
			<Route component={Signup} path="/signup" />
			<Route component={Checkout} path="/checkout" />
		</Switch>
	</Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
	module.hot.accept();
}
