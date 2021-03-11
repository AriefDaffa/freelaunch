import React, { Fragment } from 'react';
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
import loginLogo from '../../images/logo/logo_login.svg';
import navLogo from '../../images/logo/logo_freelaunch.svg';

const Register = () => {
	return (
		<Fragment>
			<Navbar />
			<Wrapper>
				<Section height="100vh" marginTop="200px">
					<Container>
						<Form>
							<Images
								imageSrc={navLogo}
								width="50%"
								backgroundColor="#252836"
								height="fit-content"
							/>
							<FormInput type="email" placeholder="Email" />
							<FormInput type="username" placeholder="Username" />
							<FormInput type="password" placeholder="Password" />
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
