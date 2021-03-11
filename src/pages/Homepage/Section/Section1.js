import React from 'react';
import {
	Button,
	Container,
	DivPseudo,
	Images,
	Search,
	Section,
	Text,
} from '../../../style/ComponentStyle';
import logoLanding from '../../../images/logo/image_landing.svg';
import magnify from '../../../images/icon/magnify-icon.svg';

const Section1 = () => {
	return (
		<Section marginTop="95px">
			<Container flexDirection="column">
				<Images imageSrc={logoLanding} />
				<Text sizeLarge="1.8em" sizeMedium="1em" sizeSmall="1em">
					Temukan segera Freelancer <br /> yang anda imajinasikan!
				</Text>
				<DivPseudo content={magnify} margin="1em 0" backgroundColor="#252836">
					<Search placeholder="Cari Freelancer" />
				</DivPseudo>
				<Container>
					<Button>Desain Grafis</Button>
					<Button>Pembuatan Web</Button>
					<Button>Konsultasi</Button>
				</Container>
				<Container>
					<Button>Desain Web</Button>
					<Button>Fotografer</Button>
					<Button>UI/UX</Button>
				</Container>
			</Container>
		</Section>
	);
};

export default Section1;
