import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../style/ComponentStyle';
import { ItemContainer, NavContainer, NavItem, NavLogo } from './NavbarStyle';

const Navbar = () => {
	return (
		<Wrapper>
			<NavContainer>
				<Link to="/">
					<NavLogo />
				</Link>
				<ItemContainer>
					<NavItem to="/">Cara Penggunaan</NavItem>
					<NavItem to="/">Kategori</NavItem>
					<NavItem to="/signup">Daftar Sebagai Freelancer</NavItem>
					<NavItem to="/login">Masuk</NavItem>
				</ItemContainer>
			</NavContainer>
		</Wrapper>
	);
};

export default Navbar;
