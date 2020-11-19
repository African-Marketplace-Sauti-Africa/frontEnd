import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {
    return (
      <nav className='navBar'>
          <Link style={{color: 'white', textDecoration: 'none'}} to='/'>
          <h3>African-MarketPlace</h3>
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
    );
  }

export default Nav;