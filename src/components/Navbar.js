import React from 'react'
import { Link } from "react-router-dom";

import logo from '../images/logo.png';
function Navbar () {
  return (
    <div className='col-md-12 navbar-container'>
        <div className='nav-logo'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='nav-items'>
            <p>Home</p>
            <p>Restaurants</p>
            <p>Home Chefs</p>
            <p>Offers</p>
            <p>About as</p>
        </div>
        <div className='nav-button'>
            <button>Sign up</button>
        </div>
    </div>


  )
}
export default Navbar;