import React from 'react'
import CTA from './CTA'
const Header = () => {
  return (
    <header>
      <div className="container header--container">
        <h5>Hello I am</h5>
        <h1>Eamon <br/> McHugh</h1>
        <h5>Fullstack Developer</h5>
        <CTA/>
      </div>
    </header>
  )
}

export default Header