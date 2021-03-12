import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { maxDevice, minDevice } from '../../style/variables/breakpoint';
import { color } from '../../style/variables/colors';

export const KategoriDropdown = styled.div`
	display: flex;
	width: 10em;
	background-color: ${color.black2};
	color: ${color.white};
	padding: 0.5em 0 0.8em 0;
	border-radius: 5px;
`;

export const KategoriFilter = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${color.black2};
	text-decoration: none;
	padding: 1rem;
	border-radius: 5px;
	margin: 2rem 0;
`;

export const KategoriItem = styled(Link)`
	text-decoration: none;
	background-color: ${color.black2};
	color: ${color.gray1};
	width: fit-content;

	&:hover {
		color: ${color.white};
	}
`;

export const KategoriInput = styled.input`
	border: none;
	padding: 1em 0;
	margin: 1em 0;
	border-radius: 5px;
	width: 100%;
	color: ${color.gray1};
	background-color: ${color.black2};
	font-size: 1em;
	outline: none;
`;

//card container
export const KategoriContainer = styled.div`
	display: grid;
	width: fit-content;
	grid-gap: 1rem;
	/* grid-template-columns: repeat(3, 1fr); */
	/* @media ${minDevice.mobileM} {
		grid-template-columns: repeat(2, 1fr);
	} */
	@media ${maxDevice.mobileL} {
		grid-template-columns: 1fr;
	}
	@media ${minDevice.tablet} {
		grid-template-columns: repeat(3, 1fr);
	}
`;
