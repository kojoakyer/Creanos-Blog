import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


function Navbar() {

    const user= false;

    const [click, setClick] = useState(false)

    function handleClick(){
        setClick(!click)
    }

    function closeMobileMenu(){
        setClick(false)
    }




  return (
    <>
    <div className="navbar">
        <div className="nav-left">
            <h1 className='navbar-logo'>CREANOS BLOG</h1>
        </div>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times':'fas fa-bars'}/>
        </div>
        <div className="nav-center">
            <ul className={click ? 'nav-menu active':'nav-menu'}>
                <li className="nav-item" onClick={closeMobileMenu}>
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className="nav-item" onClick={closeMobileMenu}>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                </li>
                <li className="nav-item" onClick={closeMobileMenu}>
                    <Link className='nav-link' to='/about'>About</Link>
                </li>
                <li className="nav-item" onClick={closeMobileMenu}>
                    <Link to='/Write' className='nav-link'>Write</Link>
                </li>
                <li className="nav-item l" onClick={closeMobileMenu}>
                    <Link className='nav-link' to='/'>Logout</Link>
                </li>
                <li className="nav-item mobile" onClick={closeMobileMenu}>
                    <Link className='nav-link' to='/'>Logout</Link>
                </li>
                <li className='nav-item mobile' onClick={closeMobileMenu}><Link to='/Login' className='nav-link'>Login</Link> </li>
                <li className='nav-item mobile' onClick={closeMobileMenu}><Link to='/Register' className='nav-link'>Register</Link> </li>

            </ul>
        </div>
        <div className="nav-right">
            {user ? <img className='topImg' src="images/img1.jpg" alt="" />
             :(<ul className='nav-menu'>
                 <li className='nav-item '><Link to='Login' className='nav-link'>Login</Link> </li>
                 <li className='nav-item'><Link to='Register' className='nav-link'>Register</Link> </li>
                </ul>
                )}
                <div className="nav-search">
                <i className='fas fa-search'/> 
                </div>
            

        </div>
    </div>
      
    </>
  )
}

export default Navbar
