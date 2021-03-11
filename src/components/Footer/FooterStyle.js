import styled from 'styled-components';
import { color } from '../../style/variables/colors';

export const FooterTitle = styled.p`
	text-align: left;
	font-size: 1.3em;
	color: ${(props) => props.color || color.gray1};
`;

export const FooterText = styled.p`
	text-align: ${(props) => props.textAlign || 'left'};
	font-size: 1em;
	height: fit-content;

	color: ${(props) => props.color || color.gray1};
`;
