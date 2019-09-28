import React from 'react';

import './Header.css'
import imag from '../../Images/header.jpg'

const Header = () =>(
    <div style={{  
        backgroundImage: "url(" + imag + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} 
      className="header">

    </div>
)

export default Header;