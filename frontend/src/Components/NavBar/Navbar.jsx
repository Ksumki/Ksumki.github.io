import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg';



const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo' />
                
            </div>
        </div>
    )
}

export default Navbar;