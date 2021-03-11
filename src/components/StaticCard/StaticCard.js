import React from 'react';
import styled from 'styled-components';
import { maxDevice } from '../../style/variables/breakpoint';
import { color } from '../../style/variables/colors';

//CARD SECTION
export const CardContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	flex-direction: ${(props) => props.flexDirection || 'row'};

	@media ${maxDevice.tablet} {
		flex-direction: column;
	}
`;

export const Card = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-image: url(${(props) => props.image});
	background-color: ${(props) => props.BackgroundColor};
	color: ${color.white};
	font-size: ${(props) => props.fontSize || '2em'};
	width: ${(props) => props.width || '258px'};
	height: ${(props) => props.height || '320px'};
	margin: 0.5em;
	border-radius: 10px;

	@media ${maxDevice.mobileL} {
		width: 258px;
		margin: 0.5em;
	}
`;

const StaticImg = styled.img.attrs((props) => ({
	src: props.src,
	alt: '...',
}))`
	width: 30%;
	background-color: ${color.black2};
`;

const TextCard = styled.p`
	font-size: 0.5em;
	background-color: ${color.black2};
	font-weight: ${(props) => props.weight};
	padding: 0 1em;
	text-align: center;
`;

const StaticCard = (props) => {
	return (
		<CardContainer flexDirection="row">
			<Card width="300px" height="350px" BackgroundColor="#252836">
				<StaticImg src={props.image} />
				<TextCard weight="bold">{props.title}</TextCard>
				<TextCard>{props.body}</TextCard>
			</Card>
		</CardContainer>
	);
};

export default StaticCard;
