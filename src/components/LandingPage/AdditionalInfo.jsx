import React from 'react'
import '../../css/Landing/AdditionalInfo.css'
function AdditionalInfo() {
  return (
    <div className='additional-info-container'>
         <div className="additional-info-card">
              <div className="additional-info-card-img">
                  <img src="https://images.ctfassets.net/40w0m41bmydz/tY05XVZYVo3XQTjNRY5iC/8f8e13e7637a1cdf4f6d727614607f26/partners-and-gc-api-en.png?w=1998&h=1509&q=50&fm=webp" alt="" />
              </div>
              <div className="additional-info-card-text">
                  <h3>Great on its own. Or connect to one of 350+ other systems.</h3>
                  <p>Use GoCardless on its own with our easy-to-use online dashboard. Or seamlessly integrate it with the software you already use to run your business,
                     to manage everything in one place.</p>
                     <a href="#">See all 350+ systems GoCardless connects with</a>
              </div>
         </div>

         <div className="additional-info-card">
              <div className="additional-info-card-text">
                  <h3>Payments and data. Future-proofed.</h3>
                  <p>Open banking technology is a game-changer. That’s why we recently acquired Nordigen – a platform that provides free access to open banking data, and premium data insights.

No matter what the future holds, going with GoCardless keeps you covered..</p>
              </div>
              <div className="additional-info-card-img">
                  <img src="https://images.ctfassets.net/40w0m41bmydz/2i2xYEP6Yu25c5WmcmTY4y/b89f3c5a58b034f42cb5b6c95d29f0fa/nordigen-gc.png?w=1312&h=1312&q=50&fm=webp" alt="" />
              </div>
         </div>
    </div>
  )
}

export default AdditionalInfo