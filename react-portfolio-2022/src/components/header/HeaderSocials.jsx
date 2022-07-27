import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className='header--socials'>
        <a href="https://linkedin.com">
        <AiFillLinkedin/>
        </a>
        <a href="https://github.com">
        <AiFillGithub/>
        </a>
        <a href="https://instagram.com">
        <AiOutlineInstagram/>
        </a>
    </div>
  )
}

export default HeaderSocials