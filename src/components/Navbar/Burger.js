import React, { useState } from 'react';
import { Images } from '../../style/ComponentStyle';
import { BurgerKing } from './NavbarStyle';

import menu from '../../images/vector/hamburger/menu.svg';

const Burger = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<BurgerKing onClick={() => setShowMenu(!showMenu)}>
			<Images imageSrc={menu} />
		</BurgerKing>
	);
};

export default Burger;
