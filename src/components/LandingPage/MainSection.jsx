import React from 'react'
import '../../css/Landing/MainSection.css'
import ListCustomers from './ListCustomers'
import PaymentInfo from './PaymentInfo'
import FeaturesSection from './FeaturesSection'
function MainSection() {
  return (
    <section className='main-section'>
        <ListCustomers/>
        <PaymentInfo/>
        <FeaturesSection/>
    </section>
  )
}

export default MainSection