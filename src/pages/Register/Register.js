import React, { Fragment, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import {
	Container,
	Images,
	Section,
	Wrapper,
} from '../../style/ComponentStyle';
import {
	Form,
	FormButton,
	FormInput,
	FormLink,
	FormText,
} from '../Login/LoginStyle';

import freelaunch from '../../api/freelaunch';
import { useAuth } from '../../config/Auth';
import { Redirect } from 'react-router-dom';

import loginLogo from '../../images/logo/logo_login.svg';
import navLogo from '../../images/logo/logo_freelaunch.svg';

const Register = () => {
	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');
	const [Username, setUsername] = useState('');
	const { setAuthTokens } = useAuth();
	const [IsLoggedIn, setIsLoggedIn] = useState(false);

	console.log({ Email, Username, Password });

	const handleSignup = async (e) => {
		e.preventDefault();
		await freelaunch
			.post('/user/register', {
				username: Username,
				email: Email,
				password: Password,
			})
			.then((res) => {
				res.status === 200 && setAuthTokens(res.data.data.token);
				setIsLoggedIn(true);
			});
		// await freelaunch
		// 	.post('/user/login', {
		// 		username: Username,
		// 		password: Password,
		// 	})
	};

	if (IsLoggedIn) {
		return <Redirect to={'/login'} />;
	}

	return (
		<Fragment>
			<Navbar />
			<Wrapper>
				<Section height="100vh" marginTop="200px">
					<Container>
						<Form onSubmit={handleSignup}>
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
								type="username"
								placeholder="Username"
								onChange={(e) => setUsername(e.target.value)}
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
						</Form>
						<Images imageSrc={loginLogo} width="50%" display="none" />
					</Container>
				</Section>
			</Wrapper>
			<Footer />
		</Fragment>
	);
};

export default Register;
