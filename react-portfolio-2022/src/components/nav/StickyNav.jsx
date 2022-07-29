import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBookBookmark } from 'react-icons/bi';
import { AiOutlineMessage } from 'react-icons/ai';

import { useState } from 'react';

function StickyNav() {

	const [activeNav, setActiveNav] = useState('#header');

	return (
		<nav className='sicky--nav'>
			<a
				href='#header'
				onClick={() => setActiveNav('#header')}
				className={activeNav === '#header' ? 'active' : ''}
			>
				<AiOutlineHome />
			</a>
			<a
				href='#about'
				onClick={() => setActiveNav('#about')}
				className={activeNav === '#about' ? 'active' : ''}
			>
				<AiOutlineUser />
			</a>
			<a
				href='#skills'
				onClick={() => setActiveNav('#skills')}
				className={activeNav === '#skills' ? 'active' : ''}
			>
				<BiBookBookmark />
			</a>
			<a
				href='#services'
				onClick={() => setActiveNav('#services')}
				className={activeNav === '#services' ? 'active' : ''}
			>
				<AiOutlineHome />
			</a>
			<a
				href='#contact'
				onClick={() => setActiveNav('#contact')}
				className={activeNav === '#contact' ? 'active' : ''}
			>
				<AiOutlineMessage />
			</a>
		</nav>
	);
}

export default StickyNav;
