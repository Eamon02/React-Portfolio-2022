import React from 'react';
// import CTA from './CTA'
import HeaderSocials from './HeaderSocials';
import Blobs from './Blobs'

const Header = () => {
	return (
		<header id='header' className='header'>
        <Blobs/>
			<div className='container header--container'>
				<div className='header--title'>
					<h5>Hello I am</h5>
					<h1>
						Eamon <br /> McHugh
					</h1>
					<h5>Fullstack Developer</h5>
				</div>
				<HeaderSocials />
				<a href='#contact' className='scroll--down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
