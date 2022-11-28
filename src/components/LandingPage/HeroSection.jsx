import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import '../../css/Landing/HeroSection.css'
function HeroSection() {
  return (
    <div className='hero-section'>
      <Navbar/>
        <div className="margin">
          <div className="hero-section-text">
              <h1 className='hero-section-text-title'>A NEW ERA IN <br /> PAYMENTS</h1>
              <p className='hero-section-text-para'>Collect instant, one-off payments. Or automated, recurring payments. Without the chasing, stress, or expensive fees.</p>
              <div className="hero-section-text-links">
                  <Link to="#" className='signup'>Sign up</Link>
                  <Link to="#" className='contact-sales login'>Contact sales</Link>
              </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection