import React from 'react';
import StaticCard, {
	CardContainer,
} from '../../../components/StaticCard/StaticCard';
import { Container, Section, Text } from '../../../style/ComponentStyle';

//import images
import testiModel from '../../../images/user-testi/testi-model.svg';
import testipenerjemah from '../../../images/user-testi/testi-penerjemah.svg';
import testiWeb from '../../../images/user-testi/testi-web.svg';

const Section3 = () => {
	return (
		<Section>
			<Container flexDirection="column">
				<Text
					sizeLarge="2em"
					sizeMedium="1.5em"
					sizeSmall="1.5em"
					fontWeight="bold"
				>
					Kata Top 3 Freelancer Indonesia
				</Text>
				<CardContainer>
					<StaticCard
						image={testiWeb}
						title="Desainer Website"
						body="“Saya telah berhasil mendapat banyak client dari website ini.
								Freelaunch emang super keren!”"
					/>
					<StaticCard
						image={testipenerjemah}
						title="Penerjemah Jerman"
						body="“Wow ngga nyangka bakal jadi top 3 freelancer disini! So far
								Freelaunch punya biaya potong paling dikit”"
					/>
					<StaticCard
						image={testiModel}
						title="Model"
						body="“Ngga pernah dapet client yang rewel. Semuanya profesional
								bahkan freelancer lain disini juga!”"
					/>
				</CardContainer>
			</Container>
		</Section>
	);
};

export default Section3;
