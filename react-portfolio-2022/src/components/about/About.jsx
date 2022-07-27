import React from 'react'
import Headshot from '../../assets/headshot copy.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BiFolderOpen} from 'react-icons/bi'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about--container">
        <div className="about--me">
        <div className="about--me--image">
          <img src={Headshot} alt="About" />
        </div>
        </div>
        <div className="about--content">
        <div className="about--cards">
          <article className="about--card">
            <FaAward className='about--icon'/>
            <h5>Experience</h5>
            <small>3+ Years</small>
          </article>
          <article className="about--card">
            <FiUsers className='about--icon'/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>
          <article className="about--card">
          <BiFolderOpen className='about--icon'/>
            <h5>Projects</h5>
            <small>80+ Completed Projects</small>
          </article>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloribus ab necessitatibus perferendis, autem itaque quo animi a aut cum quae iusto nihil tenetur facilis? Assumenda aliquam doloribus nobis id.</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About