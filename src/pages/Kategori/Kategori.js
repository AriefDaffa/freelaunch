import React, { Fragment } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import {
	Container,
	DivPseudo,
	Section,
	Text,
	Wrapper,
} from '../../style/ComponentStyle';
import {
	KategoriContainer,
	KategoriDropdown,
	KategoriFilter,
	KategoriItem,
	KategoriInput,
} from './KategoriStyle';
import dropdown from '../../images/vector/dropdown.svg';
import Card from '../../components/Card/Card';
import magnify from '../../images/icon/magnify-icon.svg';

const kategori = () => {
	return (
		<Fragment>
			<Navbar />
			<Wrapper>
				<Section>
					<Container flexDirection="column" alignItems="left">
						<Text sizeLarge="2em" fontWeight="bold" textAlign="left">
							Kategori Freelancer
						</Text>
						<Text sizeLarge="1em" textAlign="left">
							Temukan segera Freelancer yang Anda <br /> imajinasikan. Kami juga
							bisa menemukan
							<br /> Freelancer yang sesuai dengan kota anda loh!
						</Text>
					</Container>
					<Container flexMobile="column">
						<Text color="#666675">Total 300 Freelancer</Text>
						<DivPseudo
							backgroundColor="#252836"
							height="fit-content"
							borderRadius="5px"
							margin="1em 0"
							contentAfter={dropdown}
						>
							<KategoriDropdown>Rating</KategoriDropdown>
						</DivPseudo>
						<DivPseudo
							backgroundColor="#252836"
							height="fit-content"
							borderRadius="5px"
							margin="1em 0"
							contentAfter={dropdown}
						>
							<KategoriDropdown>Harga</KategoriDropdown>
						</DivPseudo>
						<DivPseudo
							backgroundColor="#252836"
							height="fit-content"
							borderRadius="5px"
							margin="1em 0"
							contentAfter={dropdown}
						>
							<KategoriDropdown>Level</KategoriDropdown>
						</DivPseudo>
					</Container>

					{/* CARD SECTIONNN */}
					<Container>
						<Container
							flexDirection="column"
							width="fit-content"
							displayMobile="none"
						>
							<DivPseudo
								contentAfter={magnify}
								backgroundColor="#252836"
								borderRadius="5px"
							>
								<KategoriInput placeholder="Cari Freelancer" />
							</DivPseudo>
							<KategoriFilter>
								<Text sizeLarge="1.2em" backgroundColor="#252836" padding="0">
									Kategori
								</Text>
								<KategoriItem className="item"> Foto & Visual</KategoriItem>
								<KategoriItem className="item">Desain Grafis</KategoriItem>
								<KategoriItem className="item">
									Periklanan & Promosi
								</KategoriItem>
								<KategoriItem className="item">Penerjemahan</KategoriItem>
								<KategoriItem className="item">Website</KategoriItem>
							</KategoriFilter>
						</Container>
						<KategoriContainer>
							<Card></Card>
							<Card></Card>
							<Card></Card>
							<Card></Card>
							<Card></Card>
						</KategoriContainer>
					</Container>
				</Section>
			</Wrapper>
			<Footer />
		</Fragment>
	);
};

export default kategori;
