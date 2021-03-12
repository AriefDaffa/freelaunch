import React, { Fragment } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import {
	Button,
	Container,
	DivPseudo,
	Images,
	Section,
	Text,
	Wrapper,
} from '../../style/ComponentStyle';

//import images
import ujicoba from '../../images/vector/uji-coba.png';
import bubble1 from '../../images/icon/bubble-1.svg';
import bubble2 from '../../images/icon/bubble-2.svg';
import bubble3 from '../../images/icon/bubble-3.svg';
import bubble4 from '../../images/icon/bubble-4.svg';
import { Link } from 'react-router-dom';

const UjiCoba = () => {
	return (
		<Fragment>
			<Navbar />
			<Wrapper>
				<Section>
					<Container flexDirection="column">
						<Text sizeLarge="2em" fontWeight="bold">
							Masih ragu dengan karya mereka?
						</Text>
						<Text>
							Lakukan uji coba dengan freelancer
							<br /> “newbie” dan bayar dengan 50% di muka
						</Text>
						<Images imageSrc={ujicoba} width="50%" />
						<Container flexMobile="column">
							<Container flexDirection="column">
								<DivPseudo height="fit-content" content={bubble1}>
									<Text textAlign="left">
										Cari di kategori atau di kolom search freelancer yang Anda
										inginkan. Pilih freelancer dengan level newbie” pada filter
										Level. Kemudian pilih berdasarkan portofolio dan ulasan.
									</Text>
								</DivPseudo>
								<DivPseudo height="fit-content" content={bubble2}>
									<Text textAlign="left">
										Klik tombol “Chat Freelancer” pada sebelah kanan halaman
										profil freelancer kemudian jelaskan detail pekerjaan dan
										tawarkan harga.
									</Text>
								</DivPseudo>
							</Container>
							<Container flexDirection="column">
								<DivPseudo height="fit-content" content={bubble3}>
									<Text textAlign="left">
										Apabila penawaran harga sudah disetujui kedua belah pihak
										maka tunggu freelancer menyalakan tombol “Bayar” yang ada di
										sebelah kanan halaman chat. Apabila tombol sudah aktif,
										lakukan pembayaran 50% di muka melalui Freelaunch.
									</Text>
								</DivPseudo>
								<DivPseudo height="fit-content" content={bubble4}>
									<Text textAlign="left">
										Pantau perkembangan pekerjaan freelancer melalui dashboard
										Anda. Jika pekerjaan sudah 100%, setujui hasil karya
										freelancer dengan menekan tombol “Setujui Pekerjaan” pada
										dashboard, kemudian bayar sisa 50% harga dan berikan review
										mengenai kerjanya.
									</Text>
								</DivPseudo>
							</Container>
						</Container>
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
								Cari Freelancer
							</Link>
						</Button>
					</Container>
				</Section>
			</Wrapper>
			<Footer />
		</Fragment>
	);
};

export default UjiCoba;
