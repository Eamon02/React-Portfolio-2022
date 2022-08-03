import React, { Component } from 'react';
import kingsviewMockup from '../../assets/iPhone 11 Pro Kingsview Mockup.png';
import knightStategicMockup from '../../assets/Knight-Stategic-Wealth-Mockup.png';
import FunderMockup from '../../assets/Fundr-Mockup.png';

class Projects extends Component {
	render() {
		this.setState = [
			{
				ID: 1,
				title: 'Fundr',
				role: 'Lead designer and developer',
				desc: 'After wire-framing a design using Adobe XD, I developed and built a custom wordpress theme from scratch',
				tech: [
					'Vscode',
					'SCSS',
					'Wordpress',
					'Divi Builder',
					'Gravity Forms',
					'Cookie Law Info',
					'Yoast SEO',
					'HTML',
					'CSS',
					'JavaScript',
				],
				img: FunderMockup,
                demo: 'https://fundertrading.com/',
			},
			{
				ID: 2,
				title: 'Kingsview Partners',
				role: 'Lead designer and front end developer',
				desc: 'Redesigned and developed website for an advisory firm to revamp brand image and attract new potential partners',
				tech: [
					'Vscode',
					'SCSS',
					'Wordpress',
					'Divi Builder',
					'Gravity Forms',
					'Cookie Law Info',
					'Yoast SEO',
					'HTML',
					'CSS',
					'JavaScript',
				],
				img: kingsviewMockup,
                demo: "https://fundertrading.com/",
			},
			{
				ID: 3,
				title: 'Kingsview Partners',
				role: 'Lead designer and front end developer',
				desc: 'Redesigned and developed website for an advisory firm to revamp brand image and attract new potential partners',
				tech: [
					'Vscode',
					'SCSS',
					'Wordpress',
					'Divi Builder',
					'Gravity Forms',
					'Cookie Law Info',
					'Yoast SEO',
					'HTML',
					'CSS',
					'JavaScript',
				],
				img: knightStategicMockup,
                demo: 'https://partnerwithkingsview.com/',
			},
		];

		return (
			<section id='projects'>
				<h1>Projects</h1>
				{this.setState.map((project) => (
					<div className='project--wrapper container'>
						<div className='project--detail' key={project.ID}>
							<h3>{project.role}</h3>
							<h1>{project.title}</h1>
							<ul>
								{project.tech.map((skill, index) => (
									<li key={index}>{skill}</li>
								))}
							</ul>
							<p>{project.desc}</p>
                            <button><a href={project.demo}>Live Demo</a></button>
						</div>
						<img src={project.img} alt='Mockup' />
					</div>
				))}
			</section>
		);
	}
}

export default Projects;
