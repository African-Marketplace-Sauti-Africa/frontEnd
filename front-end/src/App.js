import React, { createContext, useState } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import './styles/App.module.css'

import UserInventory from './components/UserInventory'
import UserProfile from './components/UserProfile'
import Login from './components/Login'
import SignUp from "./components/signup"
import Developers from './components/developers'
import DevPage from './components/DevPage'
import Nav from './components/Nav'
import HomePage from './components/Home'

import PrivateRoute from './utils/PrivateRoute'

export const LoginContext = createContext()

function App() {
  const [loginInfo, setLoginInfo] = useState()

  return (    
   <LoginContext.Provider value={loginInfo}>
      <Router>
        <Nav/>
        <div>
          <Route
            render={({ location }) => {
              return (
              <Switch location={location}>
                <Route exact path="/">
                  <Redirect
                    to={{ pathname: "/home" }}
                  />
                </Route>
                <Route path="/home" component={HomePage}></Route>
                {/* <Route
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
                />  */}
                <PrivateRoute exact path='/UserInventory' component={UserInventory}/>
                <PrivateRoute exact path='/profile' component={UserProfile}/>
                <Route path="/login" >
                  <Login setLoginInfo={setLoginInfo}/>
                </Route>
                <Route path="/signup" component={SignUp}></Route>
                <Route path="/devs" component={Developers}></Route>
                <Route path='/meettheteam' component={DevPage}></Route>
              </Switch>
            )}}
          />
        </div>
      </Router>
   </LoginContext.Provider>
  );
}

export default App;