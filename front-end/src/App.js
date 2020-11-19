import React, { createContext } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom'

import './styles/App.css'

import UserInventory from './components/UserInventory'
import UserProfile from './components/UserProfile'
import Login from './components/Login'
import SignUp from "./components/signup"
import Developers from './components/developers'
import DevPage from './components/DevPage'
import Nav from './components/Nav'

import PrivateRoute from './utils/PrivateRoute'

export const LoginContext = createContext()

function App(props) {
  return (
    <Router>
      <div>
        <div className='nav'><Nav/></div>
        <Route
          render={({ location }) => {
            
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
              <PrivateRoute exact path='/UserInventory/:id' component={UserInventory}/>
              <Route path="/login" component={Login}></Route>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/devs" component={Developers}></Route>
              <Route path='/devpage' component={DevPage}></Route>
            </Switch>
          )}}
        />
      </div>
    </Router>
  );
}

export default App;