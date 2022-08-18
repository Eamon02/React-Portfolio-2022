import React from 'react';
import { useRef } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-router-dom'
function Nav() {
	const navRef = useRef();

	const showNav = () => {
		navRef.current.classList.toggle('responsive--nav');
	};

	const hideNav = () => {
		navRef.current.classList.remove('responsive--nav');
	};

	return (
		<>
			<nav className='nav'>
				{/* <a href='/' className='site--title'>
					Site Name
				</a> */}
				<ul className='nav--links' ref={navRef}>
					<li>
						<Link to='/' onClick={hideNav}>
							Home
						</Link>
					</li>
					<li>
						<Link  to='/about' onClick={hideNav}>
							About
						</Link>
					</li>
					<li>
						<Link to='/projects' onClick={hideNav}>
							Projects
						</Link>
					</li>
					<li>
						<Link to='/contact' onClick={hideNav}>
							Contact
						</Link>
					</li>
					<li>
						<div
							onClick={showNav}
							className='nav--btn nav--btn--close'>Close</div>
					</li>
				</ul>
				<div onClick={showNav} className='nav--btn'>Menu</div>
			</nav>
		</>
	);
}

export default Nav;
