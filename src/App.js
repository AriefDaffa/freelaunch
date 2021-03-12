import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Kategori from './pages/Kategori/Kategori';
import Home from './pages/Homepage/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import UjiCoba from './pages/UjiCoba/UjiCoba';
import Userpage from './pages/Userpage/Userpage';
import PrivateRoute from './config/PrivateRoute';
import { AuthContext } from './config/Auth';

import './style/Style.scss';

const App = () => {
	const existingToken = JSON.parse(localStorage.getItem('tokens'));
	const [AuthTokens, setAuthTokens] = useState(existingToken);

	const setToken = (data) => {
		localStorage.setItem('tokens', JSON.stringify(data));
		setAuthTokens(data);
	};

	return (
		<AuthContext.Provider value={{ AuthTokens, setAuthTokens: setToken }}>
			<Router>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Register} />
				<Route exact path="/kategori" component={Kategori} />
				<Route exact path="/uji-coba" component={UjiCoba} />
				<PrivateRoute exact path="/userpage" component={Userpage} />
			</Router>
		</AuthContext.Provider>
	);
};

export default App;
