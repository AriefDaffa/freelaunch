import styled from 'styled-components';
import { color } from '../../style/variables/colors';

export const CardBody = styled.div`
	background-color: ${color.black2};
	width: 270px;
	height: 370px;
	border-radius: 10px;
	/* padding: 1em; */
`;

export const CardImage = styled.div`
	background-image: url(${(props) => props.backgroundImage});
	height: 50%;
`;
