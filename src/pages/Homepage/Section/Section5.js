import React from 'react';
import {
	Container,
	DivPseudo,
	Section,
	Text,
} from '../../../style/ComponentStyle';

import bubble1 from '../../../images/icon/bubble-1.svg';
import bubble2 from '../../../images/icon/bubble-2.svg';
import bubble3 from '../../../images/icon/bubble-3.svg';
import bubble4 from '../../../images/icon/bubble-4.svg';

const Section5 = () => {
	return (
		<Section>
			<Container flexDirection="column" alignItems="left">
				<Text
					sizeLarge="2em"
					sizeMedium="1.5em"
					sizeSmall="1.5em"
					fontWeight="bold"
					textAlign="left"
					// padding="0 3em"
				>
					Freelancer Indonesia
					<br /> dalam Genggaman Anda
				</Text>
				<Container flexDirection="column" alignItems="left">
					<DivPseudo content={bubble1}>
						<Text
							sizeLarge="1em"
							sizeMedium="1em"
							sizeSmall="1em"
							textAlign="left"
						>
							Cari di kategori atau di kolom search freelancer yang Anda
							inginkan. Kemudian pilih berdasarkan portofolio dan ulasan.
						</Text>
					</DivPseudo>
					<DivPseudo content={bubble2}>
						<Text
							sizeLarge="1em"
							sizeMedium="1em"
							sizeSmall="1em"
							textAlign="left"
						>
							Klik tombol “Chat Freelancer” pada sebelah kanan halaman profil
							freelancer kemudian jelaskan detail pekerjaan dan tawarkan harga.
						</Text>
					</DivPseudo>
					<DivPseudo content={bubble3}>
						<Text
							sizeLarge="1em"
							sizeMedium="1em"
							sizeSmall="1em"
							textAlign="left"
						>
							Apabila penawaran harga sudah disetujui kedua belah pihak maka
							tunggu freelancer menyalakan tombol “Bayar” yang ada di sebelah
							kanan halaman chat. Apabila tombol sudah aktif, lakukan pembayaran
							melalui Freelaunch.
						</Text>
					</DivPseudo>
					<DivPseudo content={bubble4}>
						<Text
							sizeLarge="1em"
							sizeMedium="1em"
							sizeSmall="1em"
							textAlign="left"
						>
							Pantau perkembangan pekerjaan freelancer melalui dashboard Anda.
							Jika pekerjaan sudah 100%, setujui hasil karya freelancer dengan
							menekan tombol “Setujui Pekerjaan” pada dashboard dan berikan
							review mengenai kerjanya.
						</Text>
					</DivPseudo>
				</Container>
			</Container>
		</Section>
	);
};

export default Section5;
