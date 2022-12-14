import React from 'react'
import '../../css/Landing/MainSection.css'
import ListCustomers from './ListCustomers'
import PaymentInfo from './PaymentInfo'
import FeaturesSection from './FeaturesSection'
import Benefit from './Benefit'
import AdditionalInfo from './AdditionalInfo'
import CeoSection from './CeoSection'
function MainSection() {
  return (
    <section className='main-section'>
        <ListCustomers/>
        <PaymentInfo/>
        <FeaturesSection/>
        <Benefit/>
        <AdditionalInfo/>
        <CeoSection/>
    </section>
  )
}

export default MainSection