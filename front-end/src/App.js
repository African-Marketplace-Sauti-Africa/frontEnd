import React, { createContext } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom'

import './styles/App.css'

import UserInventory from './components/UserInventory'
import Login from './components/Login'
import SignUp from "./components/signup"
import Developers from './components/developers'

import PrivateRoute from './utils/PrivateRoute'

export const LoginContext = createContext()

function App(props) {
  console.log("APP: ", props)
  return (
    <Router>
      <div>
        <nav className='navBar'>
          <Link className='navHome' to="/home">Home</Link>
          <Link className='navAbour' to="/about">About</Link>
          <Link className='navMeet' to="/meettheteam">Meet The Team</Link>
          <Link className='navLogin' to="/login">Login</Link>
          <Link className='navSignup' to="/signup">Sign Up</Link>
          <Link className='navDevs' to="/devs">Developers</Link>
        </nav>

        <Route
          render={({ location }) => {
            console.log("LOC: ", location)
            return (
            <Switch location={location}>
              <Route exact path="/">
                <Redirect
                  to={{ pathname: "/home" }}
                />
              </Route>
              <Route
                path="/home"
                component={() => {
                  window.location.href =
                    "https://african-marketplace-landing-page.vercel.app/index.html";
                  return null;
                }}
              />
              <Route
                path="/about"
                component={() => {
                  window.location.href =
                    "https://african-marketplace-landing-page.vercel.app/about.html";
                  return null;
                }}
              />
              <Route
                path="/meettheteam"
                component={() => {
                  window.location.href =
                    "https://african-marketplace-landing-page.vercel.app/team.html";
                  return null;
                }}
              />   
              <PrivateRoute exact path='/UserInventory' component={UserInventory} />
              <Route path="/login" component={Login}></Route>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/devs" component={Developers}></Route>
            </Switch>
          )}}
        />
      </div>
    </Router>
  );
}

export default App;