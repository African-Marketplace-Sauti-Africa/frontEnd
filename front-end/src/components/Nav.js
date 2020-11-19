import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/nav.css'


function Nav() {
    return (
    <div>
      <nav className='navBar'>
          <Link style={{color: 'white', textDecoration: 'none'}} to='/'>
          <h3 className='navTitle'>African-MarketPlace</h3>
          </Link>
          <ul className='navLinks'>
            <Link className='navHome' to="/home"><li>Home</li></Link>
            <Link className='navAbour' to="/about"><li>About</li></Link>
            <Link className='navMeet' to="/meettheteam"><li>Meet The Team</li></Link>
            <Link className='navLogin' to="/login"><li>Login</li></Link>
            <Link className='navSignup' to="/signup"><li>Sign Up</li></Link>
            <Link className='navDevs' to="/devs"><li>Developers</li></Link>
          </ul>
      </nav>
    </div>
    );
  }

export default Nav;