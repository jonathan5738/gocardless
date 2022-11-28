import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { motion } from 'framer-motion';
import '../../css/Navbar/Navbar.css'
function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const variants = {
    initial: {x: '-100%', opacity: 0},
    visible: {x: 0, opacity: 1}
  }
  const logoVariants = {
    initial: {opacity: 1},
    hide: {opacity: 0}
  }
  return (
     <>
        <section className="navbar-container">
            <nav className="navbar">
              <FiMenu onClick={() => setShowMenu(prev => !prev)}
               size={26} color={'#fff'} className='menu-mobile-icon'/>
                <motion.a href="/"  variants={logoVariants}
                  initial='initial'
                  animate={showMenu ? 'hide': ''}
                  className='logo-link'>GoCardless</motion.a>
                <ul className="menu">
                    <li className='menu-item'><Link to="#">Why gocardless</Link></li>
                    <li className='menu-item'><Link to="#" className='menu-item-link'>Product <FiChevronDown className='navbar-icon'/></Link></li>
                    <li className='menu-item'><Link to="#" className='menu-item-link'>Partners <FiChevronDown className='navbar-icon'/></Link></li>
                    <li className='menu-item'><Link to="#" className='menu-item-link'>Pricing <FiChevronDown className='navbar-icon'/></Link></li>
                    <li className='menu-item'><Link to="#" className='menu-item-link'>Learn <FiChevronDown className='navbar-icon'/> </Link></li>
                    <div className='auth-links'>
                        <li className='menu-item'><Link to="#" className='login'>Login</Link></li>
                        <li className='menu-item'><Link to="#" className='signup'>Sign up</Link></li>
                    </div>
                </ul>
            </nav>
     </section>
     <motion.div
       variants={variants}
       initial='initial'
       animate={showMenu ? 'visible': ''}
       className='navbar-container-mobile'
       transition={{ duration: .3, ease: 'easeInOut'}}
     > 
        <div className="navbar-container-mobile-content">
            <FiX size={25} onClick={() => setShowMenu(prev => !prev)}
             color={'#fff'} className='close-mobile-menu-icon'/>
             <div className="navbar-container-mobile-content-links">
                 <a href="#" className='logo-link-mobile'>GoCardless</a>
                 <ul className="menu-mobile">
                    <li className='menu-item-mobile'><Link to="#" className='menu-item-mobile-link'>Product <FiArrowRight className='navbar-icon'/></Link></li>
                    <li className='menu-item-mobile'><Link to="#" className='menu-item-mobile-link'>Partners <FiArrowRight className='navbar-icon'/></Link></li>
                    <li className='menu-item-mobile'><Link to="#" className='menu-item-mobile-link'>Pricing <FiArrowRight className='navbar-icon'/></Link></li>
                    <li className='menu-item-mobile'><Link to="#" className='menu-item-mobile-link'>Learn <FiArrowRight className='navbar-icon'/> </Link></li>
                    <div className='auth-links-mobile'>
                        <li><Link to="#" className='login-mobile'>Login</Link></li>
                        <li><Link to="#" className='signup-mobile'>Sign up</Link></li>
                    </div>
                 </ul>
             </div>
        </div>
     </motion.div>
     </>
  )
}

export default Navbar