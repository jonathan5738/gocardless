import React from 'react'
import '../../css/Landing/Benefit.css'
function Benefit() {
  return (
    <div className='benefit-container'>
        <div className="benefit-card">
           <div className="benefit-card-img">
               <img src="https://images.ctfassets.net/40w0m41bmydz/7BMoypzhuxYkK3sCn8lra0/3c033e857f16ae9e77a5bef2698d7246/Global.png?w=24&h=24&q=50&fm=webp" alt="" />
           </div>
           <div className="benefit-card-text">
               <h3>International payments made simple</h3>
               <p>Collect payments from 30+ countries. Either into a local bank account, or your existing UK account thanks to in-built FX at the real market rate. Powered by Wise.</p>
               <a href="#" className='benefit-card-link'>learn more</a>
           </div>
        </div>

        <div className="benefit-card">
           <div className="benefit-card-img">
               <img src="https://images.ctfassets.net/40w0m41bmydz/4IoQTphhfj3mkgcQgIliLY/48c7e73a0152cd51797a4274995a551b/Decorative___Lightbulb_4x.png?w=24&h=24&q=50&fm=webp" alt="" />
           </div>
           <div className="benefit-card-text">
               <h3>Intelligently retry failed payments</h3>
               <p>With GoCardless, failed payments are rare. But switch on automatic retries and our payments data determines the best day to try again. Recovering 70% of failed payments, on average.</p>
               <a href="#" className='benefit-card-link'>learn more</a>
           </div>
        </div>


        <div className="benefit-card">
           <div className="benefit-card-img">
               <img src="https://images.ctfassets.net/40w0m41bmydz/2YAH2ZhrCOFU3jhPs0S41d/43862301c069eef32d7b2901e7386888/Customer_4x.png?w=24&h=24&q=50&fm=webp" alt="" />
           </div>
           <div className="benefit-card-text">
               <h3>Better for your customers, too</h3>
               <p>Businesses and consumers often prefer to make bank payments,
                 instead of using cards and digital wallets.
                 With automation and peace of mind, it’s not hard to see why.</p>
                 <a href="#" className='benefit-card-link'>learn more</a>
           </div>
        </div>

    </div>
  )
}

export default Benefit