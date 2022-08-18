import React from 'react';
import HeaderSocials from './HeaderSocials';
// import Blobs from './Blobs';
import Name from './Name';
// import { IoIosArrowForward } from 'react-icons/io';

const Header = () => {
	return (
		<header id='header' className='header'>
			{/* <Blobs /> */}
			<div className='container header--container'>
				<div className='header--title'>
					<h5>Hello I am</h5>
					<h1>
						<Name />
					</h1>
					<h5>Fullstack Developer</h5>
				</div>
				<HeaderSocials />
				{/* <a href='#contact' className='scroll--down'>
					Scroll Down <IoIosArrowForward />
				</a> */}
			</div>
		</header>
	);
};

export default Header;
