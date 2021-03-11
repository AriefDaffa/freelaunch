import React from 'react';
import {
	Container,
	DivPseudo,
	Images,
	Section,
	Text,
} from '../../../style/ComponentStyle';

//import images
import vektor1 from '../../../images/vector/vector-2.svg';
import bubble1 from '../../../images/icon/blue-dot.svg';
import bubble2 from '../../../images/icon/pink-dot.svg';
import bubble3 from '../../../images/icon/orange-dot.svg';

const Section4 = () => {
	return (
		<Section>
			<Container flexDirection="row-reverse">
				<Images display="none" imageSrc={vektor1} width="40%" />
				<Container flexDirection="column" alignItems="left">
					<Text
						sizeLarge="2em"
						sizeMedium="1.5em"
						sizeSmall="1.5em"
						fontWeight="bold"
						textAlign="left"
					>
						Freelancer Indonesia
						<br /> dalam Genggaman Anda
					</Text>
					<DivPseudo content={bubble1}>
						<Text
							sizeLarge="1em"
							sizeMedium="1em"
							sizeSmall="1em"
							textAlign="left"
						>
							Dari budget mahasiswa hingga yang
							<br /> paling berkelas
						</Text>
					</DivPseudo>
					<DivPseudo content={bubble2}>
						<Text
							sizeLarge="1em"
							sizeMedium="1em"
							sizeSmall="1em"
							textAlign="left"
						>
							Freelancer dengan portofolio yang
							<br /> berkualitas
						</Text>
					</DivPseudo>
					<DivPseudo content={bubble3}>
						<Text
							sizeLarge="1em"
							sizeMedium="1em"
							sizeSmall="1em"
							textAlign="left"
						>
							Proses pembayaran aman
							<br /> setiap saat
						</Text>
					</DivPseudo>
				</Container>
			</Container>
		</Section>
	);
};

export default Section4;
