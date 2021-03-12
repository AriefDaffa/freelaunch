import React, { Fragment, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import {
	Container,
	Images,
	Section,
	Wrapper,
} from '../../style/ComponentStyle';
import { Form, FormButton, FormInput, FormLink, FormText } from './LoginStyle';

//import images
import loginLogo from '../../images/logo/logo_login.svg';
import navLogo from '../../images/logo/logo_freelaunch.svg';

import freelaunch from '../../api/freelaunch';
import { useAuth } from '../../config/Auth';
import { Redirect } from 'react-router-dom';

const Login = () => {
	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');
	const { setAuthTokens } = useAuth();
	const [isLoggedIn, setLoggedIn] = useState(false);

	const handleLogin = async (e) => {
		e.preventDefault();
		await freelaunch
			.post('/user/login', {
				email: Email,
				password: Password,
			})
			.then((res) => {
				res.status === 200 && setAuthTokens(res.data.data.token);
				setLoggedIn(true);
			});
	};

	if (isLoggedIn) {
		return <Redirect to={'/'} />;
	}

	return (
		<Fragment>
			<Navbar />
			<Wrapper>
				<Section height="100vh" marginTop="200px">
					<Container>
						<Form onSubmit={handleLogin}>
							<Images
								imageSrc={navLogo}
								width="50%"
								backgroundColor="#252836"
								height="fit-content"
							/>
							<FormInput
								type="email"
								placeholder="Email"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<FormInput
								type="password"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
							/>

							<FormButton>Masuk</FormButton>
							<FormText>
								Belum punya akun ?
								<FormLink to="/signup"> Daftar Sekarang</FormLink>
							</FormText>
							<FormLink to="">Lupa Password?</FormLink>
						</Form>
						<Images imageSrc={loginLogo} width="50%" display="none" />
					</Container>
				</Section>
			</Wrapper>
			<Footer />
		</Fragment>
	);
};

export default Login;
