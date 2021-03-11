import React, { Fragment } from 'react';
import { Route } from 'react-router';
import Home from './pages/Homepage/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import './style/Style.scss';

const App = () => {
	return (
		<Fragment>
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Register} />
		</Fragment>
	);
};

export default App;
