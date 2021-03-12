import React from 'react';
import {
	CardStatic,
	CardContainer,
} from '../../../components/StaticCard/StaticCard';
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
import { Link } from 'react-router-dom';

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
					<CardStatic image={webCard}>Website</CardStatic>
					<CardStatic image={fotoCard}>Foto & Visual</CardStatic>
					<CardStatic image={penerjemahCard}>Penerjemahan</CardStatic>
					<CardStatic image={desainCard}>Desain Grafis</CardStatic>
				</CardContainer>
				<Button
					backgroundColor="#2700d9"
					color="white"
					radius="5px"
					padding="0"
				>
					<Link
						style={{
							textDecoration: 'none',
							color: 'white',
							backgroundColor: '#2700d9',
							padding: '0 4em',
						}}
						to="/kategori"
					>
						Eksplor Kategori
					</Link>
				</Button>
			</Container>
		</Section>
	);
};

export default Section2;
