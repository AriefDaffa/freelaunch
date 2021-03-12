import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../config/Auth';
import { Wrapper } from '../../style/ComponentStyle';
import Burger from './Burger';
import { ItemContainer, NavContainer, NavItem, NavLogo } from './NavbarStyle';

const Navbar = () => {
	const { setAuthTokens } = useAuth();

	const handleLogout = () => {
		setAuthTokens();
		localStorage.clear();
	};

	return (
		<Wrapper>
			<NavContainer>
				<Link to="/">
					<NavLogo />
				</Link>
				<ItemContainer>
					<NavItem to="/">Cara Penggunaan</NavItem>
					<NavItem to="/kategori">Kategori</NavItem>
					<NavItem to="/signup">Daftar Sebagai Freelancer</NavItem>
					<NavItem to="/login">Masuk</NavItem>
				</ItemContainer>
				<Burger />
			</NavContainer>
		</Wrapper>
	);
};

export default Navbar;
