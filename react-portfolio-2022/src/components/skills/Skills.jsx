import React from 'react';
import { motion } from 'framer-motion';
// import { useRef, useState, useEffct } from 'react';
import CarouselElements from './CarouselElements';

// const colors = ["#845ec2","#d65db1", "#ff6f91", "#ff9671", "#ffc75f", "#f9f871"]

function Skills() {

	return (
		<section id='skills'>
			<h1>Skills</h1>
			<motion.div className='skills--carousel container'>
        <motion.div className='skills--carousel--inner'>
          {CarouselElements.map(CarouselElements =>{
            return(
              <motion.div className='skills--carousel--item' key={CarouselElements}><CarouselElements/></motion.div>
            );
          })}
        </motion.div>
      </motion.div>
		</section>
	);
}

export default Skills;
