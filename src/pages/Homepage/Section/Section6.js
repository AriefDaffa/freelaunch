import React from 'react';
import {
	Button,
	Container,
	Images,
	Section,
	Text,
} from '../../../style/ComponentStyle';

//import images
import karyaMereka from '../../../images/vector/karya-mereka.svg';
import { Link } from 'react-router-dom';

const Section6 = () => {
	return (
		<Section>
			<Container flexDirection="column">
				<Text
					sizeLarge="2em"
					sizeMedium="1.5em"
					sizeSmall="1.5em"
					fontWeight="bold"
				>
					Masih ragu dengan karya mereka?
				</Text>
				<Images imageSrc={karyaMereka} width="50%" />
				<Text sizeLarge="1.3em" sizeMedium="1em" sizeSmall="1em">
					Lakukan uji coba bersama Freelancer <br /> "Newbie" kami dengan biaya
					50% dimuka
				</Text>
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
						to="/uji-coba"
					>
						Uji Coba
					</Link>
				</Button>
			</Container>
		</Section>
	);
};

export default Section6;
