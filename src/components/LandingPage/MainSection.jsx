import React from 'react'
import '../../css/Landing/MainSection.css'
import ListCustomers from './ListCustomers'
import PaymentInfo from './PaymentInfo'
function MainSection() {
  return (
    <section className='main-section'>
        <ListCustomers/>
        <PaymentInfo/>
    </section>
  )
}

export default MainSection