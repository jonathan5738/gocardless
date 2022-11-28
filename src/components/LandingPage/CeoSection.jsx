import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import '../../css/Landing/CeoSection.css'
function CeoSection() {
  return (
    <div className='ceo-section-container'>
         <div className="ceo-section-img">
              <img src="https://images.pexels.com/photos/8937609/pexels-photo-8937609.jpeg" alt="" />
         </div>
         <div className="ceo-section-text">
             <p className='quote'>“As a business owner, GoCardless makes me feel secure. I never wake up in the middle of the night worrying about payments.”</p>
             <p className="ceo-name">John Doe, CEO, Running Club</p>
             <a href="#" className='clients-list'>See what Running Club and other businesses have to say <FiArrowRight size={20} /></a>
         </div>
    </div>
  )
}

export default CeoSection