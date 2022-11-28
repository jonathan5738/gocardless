import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import '../../css/Landing/FeaturesSection.css'
function FeaturesSection() {
  return (
    <div className='feature-section'>
        <h2 className='feature-section-title'>All the features you need</h2>
        <div className="feature-section-grid">
            <div className="feature-section-card">
                 <div className="feature-card-text">
                    <h3>Instant, one-off payments</h3>
                    <p>Forget about waiting for your customers to make a bank transfer.
                        Or paying expensive card fees. Collect one-off payments instantly with GoCardless.
                        Direct from your customer’s bank account to yours.</p>
                        <span className="how-it-works">See how it works <FiArrowRight size={20}/></span>
                 </div>
                <img src="https://images.ctfassets.net/40w0m41bmydz/6OIb7b3IOIMZRF2tIND2Bw/7a03fcb225b4da044d2ee3ee753535c5/c-card-one-off-en.png?w=1296&h=784&q=50&fm=webp" alt="" />
            </div>

            <div className="feature-section-card">
                 <div className="feature-card-text">
                    <h3>Instant, one-off payments</h3>
                    <p>Forget about waiting for your customers to make a bank transfer.
                        Or paying expensive card fees. Collect one-off payments instantly with GoCardless.
                        Direct from your customer’s bank account to yours.</p>
                        <span className="how-it-works">See how it works <FiArrowRight size={20}/></span>
                 </div>
                <img src="https://images.ctfassets.net/40w0m41bmydz/li5QP7xssPcZflamjRHcX/aeba8bc59dd55ddc0301e4ab0f7646c4/c-card-recurring-en.png?w=1296&h=784&q=50&fm=webp" alt="" />
            </div>

        </div>
    </div>
  )
}

export default FeaturesSection