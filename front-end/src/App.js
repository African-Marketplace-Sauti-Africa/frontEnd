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
import {getLoginStatus} from './services/authentication'

export const LoginContext = createContext()



function App() {
  const [loginInfo, setLoginInfo] = useState(getLoginStatus())
  const [loginStatus, setLoginStatus] = useState(false)

  return (    
   <LoginContext.Provider value={loginInfo}>
      <Router>
        <Nav loginStatus={loginStatus}/>
          <Switch >
            <Route exact path="/">
              <Redirect
                to={{ pathname: "/home" }}
              />
            </Route>
            <Route path="/home" component={HomePage}></Route>
            <PrivateRoute exact path='/UserInventory' component={UserInventory}/>
            <PrivateRoute exact path='/profile' component={UserProfile}/>
            <Route path="/login" >
              <Login setLoginInfo={setLoginInfo} setLoginStatus={setLoginStatus}/>
            </Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/devs" component={Developers}></Route>
            <Route path='/meettheteam' component={DevPage}></Route>
          </Switch>
      </Router>
   </LoginContext.Provider>
  );
}
export default App;