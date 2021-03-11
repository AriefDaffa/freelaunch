import React from 'react';
import {
	Container,
	Images,
	Section,
	Text,
	Wrapper,
} from '../../style/ComponentStyle';
import navLogo from '../../images/logo/logo_freelaunch.svg';
import { FooterText, FooterTitle } from './FooterStyle';

const Footer = () => {
	return (
		<Wrapper borderStyle=" solid none none none">
			<Section marginTop="20px">
				<Container flexMobile="column" alignItems="left">
					<Container
						flexDirection="column"
						alignItems="left"
						justifyContent="left"
					>
						<Images imageSrc={navLogo} width="50%" />
						<Text textAlign="left">
							Temukan segera Freelancer yang <br /> Anda imajinasikan atau
							gabung
							<br />
							untuk menemukan projek impian <br /> Anda.
						</Text>
					</Container>
					<Container
						flexDirection="column"
						alignItems="left"
						justifyContent="left"
					>
						<FooterTitle color="white">Kategori</FooterTitle>
						<FooterText>Desain dan Grafis</FooterText>
						<FooterText>Website</FooterText>
						<FooterText>Penerjemahan</FooterText>
						<FooterText>Lainnya...</FooterText>

						<FooterTitle color="white">Office</FooterTitle>
						<FooterText>freelaunch@gmail.com</FooterText>
						<FooterText>Malang, Indonesia</FooterText>
					</Container>
					<Container
						flexDirection="column"
						alignItems="left"
						justifyContent="left"
					>
						<FooterTitle color="white">Cara Penggunaan</FooterTitle>
						<FooterText>Untuk Freelancer</FooterText>
						<FooterText>Untuk Pemberi Kerja</FooterText>

						<FooterTitle color="white">Social</FooterTitle>
						<FooterText>Instagram</FooterText>
						<FooterText>LinkedIn</FooterText>
						<FooterText>Youtube</FooterText>
					</Container>
				</Container>
				<FooterText textAlign="center">
					2021 Freelaunch - All Right Reserved - Love From Malang
				</FooterText>
			</Section>
		</Wrapper>
	);
};

export default Footer;
