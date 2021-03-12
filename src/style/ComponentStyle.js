import styled from 'styled-components';
import { minDevice, maxDevice } from './variables/breakpoint';
import { color } from './variables/colors';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-style: ${(props) => props.borderStyle};
	border-color: ${color.white};
`;

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	height: ${(props) => props.height || 'fit-content'};
	margin-top: ${(props) => props.marginTop || '95px'};
	width: 100%;

	@media ${maxDevice.tablet} {
		padding: 0 1em;
	}
	@media ${minDevice.laptop} {
		width: 1440px;
		padding: 0 2em;
		margin-bottom: 2em;
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: ${(props) => props.alignItems || 'center'};
	justify-content: ${(props) => props.justifyContent || 'space-around'};
	padding: ${(props) => props.padding};
	flex-direction: ${(props) => props.flexDirection || 'row'};
	height: ${(props) => props.height};
	width: ${(props) => props.width};

	@media ${maxDevice.tablet} {
		flex-direction: ${(props) => props.flexMobile};
	}
	@media ${maxDevice.laptop} {
		display: ${(props) => props.displayMobile};
	}
`;

export const Images = styled.img.attrs((props) => ({
	src: props.imageSrc,
}))`
	width: ${(props) => props.width || '90%'};
	background-color: ${(props) => props.backgroundColor};
	height: ${(props) => props.height};

	@media ${maxDevice.tablet} {
		display: ${(props) => props.display};
	}
`;

export const Text = styled.p`
	color: ${(props) => props.color || color.white};
	font-weight: ${(props) => props.fontWeight};
	text-align: ${(props) => props.textAlign || 'center'};
	font-size: ${(props) => props.sizeLarge};
	padding: ${(props) => props.padding || '1em 0'};
	width: fit-content;
	height: ${(props) => props.height};
	background-color: ${(props) => props.backgroundColor};

	@media ${maxDevice.tablet} {
		font-size: ${(props) => props.sizeMedium};
	}
	@media ${maxDevice.mobileL} {
		font-size: ${(props) => props.sizeSmall};
	}
	@media ${minDevice.tablet} {
		padding: ${(props) => props.padding};
	}
`;

export const Search = styled.input.attrs((props) => ({
	placeholder: props.placeholder,
}))`
	display: flex;
	justify-content: center;
	border: none;
	color: ${color.white};
	background-color: ${color.black2};
	border-radius: 10px;
	margin: 1em 0 1em 0;
	outline: none;
	font-size: 1.2em;

	@media ${minDevice.tablet} {
		width: 600px;
		height: 60px;
	}
	@media ${maxDevice.tablet} {
		width: 60%;
		height: 50px;
		border-radius: 5px;
		font-size: 1em;
	}
	@media ${maxDevice.mobileL} {
		border-radius: 5px;
		height: 35px;
	}
`;

export const Button = styled.button`
	border: none;
	background-color: ${(props) => props.backgroundColor || color.black2};
	height: ${(props) => props.height || '3em'};
	margin: 0.5em;
	padding: ${(props) => props.padding || '0 2em'};
	color: ${(props) => props.color || color.gray1};
	border-radius: ${(props) => props.radius || '20px'};
	outline: none;

	&:hover {
		cursor: pointer;
	}

	@media ${maxDevice.mobileL} {
		padding: 0 1em;
	}
`;
//
export const DivPseudo = styled.div`
	display: flex;
	width: fit-content;
	align-items: ${(props) => props.align || 'center'};
	background-color: ${(props) => props.backgroundColor};
	margin: ${(props) => props.margin};
	border-radius: ${(props) => props.borderRadius || '10px'};
	height: ${(props) => props.height || '70px'};
	padding-top: 0.6em;

	&::before {
		content: url(${(props) => props.content});
		margin: 0 1em;
	}

	&::after {
		content: url(${(props) => props.contentAfter});
		margin: 0 1em;
	}
`;
