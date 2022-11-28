import React from 'react'
import '../../css/Landing/PaymentInfo.css'
function PaymentInfo() {
  return (
    <section className="payment-info-container">
        <div className="customer-img">
            <img src="https://images.ctfassets.net/40w0m41bmydz/F2FuR40xo8MODRT5VfEUm/ec437e35d5a36db0a9ad565e9f7e613d/payment-avatar-en.png?w=1328&h=1649&q=50&fm=webp" alt="" />
        </div>
        <div className="payment-info-text">
             <h3 className='payment-info-text-title'>Payments. But without the hassle.</h3>
             <div className="payment-info-text-grid">
                 <div className="payment-info-text-card">
                     <h3>End late payments</h3>
                     <p>Easy for your customers to make instant, one-off payments.
                         Or set them up for automated payments, so neither of you has to lift a finger.</p>
                 </div>

                 <div className="payment-info-text-card">
                     <h3>No more chasing</h3>
                     <p>With GoCardless, you don’t have to rely on your customers remembering to pay on time.
                         Saving you all those costly hours chasing up late payments.</p>
                 </div>

                 <div className="payment-info-text-card">
                     <h3>Automate admin</h3>
                     <p>Easily see the status of any payment from any customer, any time.
                         And if you connect GoCardless to your accounting system, reconciliation is automatic.</p>
                 </div>

                 <div className="payment-info-text-card">
                     <h3>Forget expensive fees</h3>
                     <p>GoCardless collects direct bank payments. Meaning no card fees.
                         And with all that wasted admin time cut away, the savings really stack up.</p>
                 </div>
             </div>
        </div>
    </section>
  )
}

export default PaymentInfo