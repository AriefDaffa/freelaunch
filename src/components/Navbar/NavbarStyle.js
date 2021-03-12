import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { minDevice, maxDevice } from '../../style/variables/breakpoint';
import { color } from '../../style/variables/colors';

import navLogo from '../../images/logo/logo_freelaunch.svg';

export const NavContainer = styled.div`
	position: fixed;
	display: flex;
	background-color: ${color.black1};
	align-items: center;
	justify-content: space-between;
	height: 90px;
	margin-top: 90px;

	@media ${maxDevice.tablet} {
		justify-content: space-space-evenly;
	}

	@media ${maxDevice.laptop} {
		padding: 0 1em;
		width: 100%;
	}

	@media ${minDevice.laptop} {
		padding: 0 2em;
		width: 1440px;
	}
`;

export const ItemContainer = styled.div`
	/* display: none; */
	@media ${maxDevice.tablet} {
		display: none;
	}
	@media ${minDevice.tablet} {
		display: flex;
	}
`;

export const NavLogo = styled.img.attrs({
	src: navLogo,
})`
	display: flex;
`;

export const NavItem = styled(Link)`
	text-decoration: none;
	color: ${color.white};
	display: flex;
	height: fit-content;

	@media ${minDevice.laptop} {
		margin: 0 2em;
	}

	@media ${maxDevice.laptop} {
		margin: 0 1em;
	}
`;

export const BurgerKing = styled.div`
	height: fit-fit-content;
	@media ${minDevice.tablet} {
		display: none;
	}
`;
