import React, { Fragment } from 'react';
import { CardBody, CardImage } from './CardStyle';

import images from '../../images/vector/images.svg';
//
const Card = (props) => {
	return (
		<Fragment>
			<CardBody>
				<CardImage backgroundImage={images} />
			</CardBody>
		</Fragment>
	);
};

export default Card;
