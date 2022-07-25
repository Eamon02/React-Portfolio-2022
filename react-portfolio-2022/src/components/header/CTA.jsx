import React from 'react'
import Resume from '../../assets/Eamon McHugh Resume 2022 copy.pdf'

const CTA = () => {
  return (
    <div>
        <a href={Resume} download className='btn'>Resume</a>
        <a href="#contact" className=''>Let's Talk</a>
    </div>
  )
}

export default CTA