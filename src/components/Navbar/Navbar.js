import React from 'react';
import Logo from '../../Images/LogoSmall.svg';
import './Navbar.css';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__logo">
                <img src={Logo} alt='Logo' />
            </div>

            <div className="navbar__middle">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </div>

            <div className="navbar__end">
                <p>Shop</p>
                <p>Tesla Account</p>
                <MenuIcon className='navbar__end__icon' />
            </div>
            
        </div>
    )
}

export default Navbar
