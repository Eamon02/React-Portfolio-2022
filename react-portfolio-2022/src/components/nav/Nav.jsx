import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {AiOutlineMessage} from 'react-icons/ai'

import {useState} from 'react'

function Nav() {

  const [activeNav, setActiveNav] = useState('#header')

  return (
    <nav>
      <a href="#header" onClick={()=> setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookBookmark/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav