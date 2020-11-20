import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/nav.module.css'


function Nav(props) {console.log('nav login',props.loginStatus);

    return (
    <div>
      <nav className='navBar'>
          <h3 className='navTitle'>African-MarketPlace</h3>
          <ul className='navLinks'>
            <Link className='navHome' to="/home"><li>Home</li></Link>
            <Link className='navMeet' to="/meettheteam"><li>Meet The Team</li></Link>
            <Link className='navDevs' to="/devs"><li>Developers</li></Link>
            {(!props.loginStatus) ? (<Link className='navLogin' to="/login"><li>Login</li></Link>) : (<div></div>)}
            {(!props.loginStatus) ? (<Link className='navSignup' to="/signup"><li>Sign Up</li></Link>) : (<div></div>)}
            {(props.loginStatus) ? (<Link className='userInventory' to="/UserInventory"><li>Inventory</li></Link>) : (<div></div>)}
            {(props.loginStatus) ? (<Link className='profile' to="/profile"><li>Profile</li></Link>) : (<div></div>)}
          </ul>
      </nav>
    </div>
    );
  }

export default Nav;