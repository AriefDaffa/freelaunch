import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Wrapper } from '../../style/ComponentStyle';

//import Section
import Section1 from './Section/Section1';
import Section6 from './Section/Section6';
import Section2 from './Section/Section2';
import Section3 from './Section/Section3';
import Section4 from './Section/Section4';
import Section5 from './Section/Section5';

const Home = () => {
	return (
		<Fragment>
			<Navbar />
			<Wrapper>
				{/* LANDING SECTION */}
				<Section1 />

				{/* KATEGORI SECTION */}
				<Section2 />

				{/* TESTIMONI SECTION */}
				<Section3 />

				{/* FREELANCER SECTION */}
				<Section4 />

				{/* BAGAIMANA SECTION */}
				<Section5 />

				{/* UJI COBA SECTION */}
				<Section6 />
			</Wrapper>
			<Footer />
		</Fragment>
	);
};

export default Home;
