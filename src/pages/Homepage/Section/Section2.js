import React from 'react';
import { Card, CardContainer } from '../../../components/StaticCard/StaticCard';
import {
	Button,
	Container,
	Section,
	Text,
} from '../../../style/ComponentStyle';

//import images
import webCard from '../../../images/vector/website.svg';
import fotoCard from '../../../images/vector/foto.svg';
import penerjemahCard from '../../../images/vector/penerjemah.svg';
import desainCard from '../../../images/vector/desain.svg';

const Section2 = () => {
	return (
		<Section>
			<Container flexDirection="column">
				<Text
					sizeLarge="2em"
					sizeMedium="1.5em"
					sizeSmall="1.5em"
					fontWeight="bold"
				>
					Kategori Populer
				</Text>
				<CardContainer>
					<Card image={webCard}>Website</Card>
					<Card image={fotoCard}>Foto & Visual</Card>
					<Card image={penerjemahCard}>Penerjemahan</Card>
					<Card image={desainCard}>Desain Grafis</Card>
				</CardContainer>
				<Button
					backgroundColor="#2700d9"
					color="white"
					radius="5px"
					padding="0 4em"
				>
					Eksplor Kategori
				</Button>
			</Container>
		</Section>
	);
};

export default Section2;
