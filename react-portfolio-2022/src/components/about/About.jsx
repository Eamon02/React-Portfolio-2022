import React from 'react';
import Headshot from '../../assets/headshot copy.png';

const About = () => {
	return (
		<section id='about'>
						<h1>About Me</h1>
			<div className='about--me'>
				<div className='container about--me--container'>
					<div className='about--me--image'>
						<img src={Headshot} alt='About' />
					</div>
					<div className='about--me--content'>
						<h2>I love to Dream</h2>
						<p>
							Lorem ipsum dolor sit, amet consectetur
							adipisicing elit. Amet magni praesentium enim
							assumenda aspernatur, unde ad a rerum
							molestias inventore atque corporis cum.
							Minima veritatis beatae vel quia commodi at.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
