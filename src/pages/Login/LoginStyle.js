import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { color } from '../../style/variables/colors';

export const Form = styled.form`
	display: flex;
	background-color: ${color.black2};
	width: 450px;
	height: 550px;
	padding: 1rem;
	border-radius: 10px;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

export const FormInput = styled.input`
	border: none;
	padding: 1em 0;
	margin: 1em 0;
	border-radius: 5px;
	width: 100%;
	color: ${color.gray1};
	font-size: 1em;
	outline: none;
`;

export const FormButton = styled.button`
	width: 100%;
	border: none;
	background-color: ${color.darkblue};
	color: ${color.white};
	padding: 1em 0;
	border-radius: 5px;

	&:hover {
		cursor: pointer;
	}
`;

export const CheckboxContainer = styled.div`
	display: flex;
	align-items: left;
	background-color: ${color.black2};
`;

export const Checkbox = styled.input`
	display: flex;
	width: fit-content;
	margin-top: 5px;
`;

export const FormText = styled.p`
	text-decoration: none;
	color: ${color.gray1};
	background-color: ${color.black2};
`;

export const FormLink = styled(Link)`
	text-decoration: none;
	color: ${color.gray1};
	background-color: ${color.black2};
`;
