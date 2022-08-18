// rafce functional component
import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import {Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
const App = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route path='/' element={<Header />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</>
	);
};

export default App;
