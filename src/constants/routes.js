import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

// import CreateAccount from '../Screens/CreateAccount.js'
import Login from '../Screens/Login.js'
import LoginSuccess from '../Screens/LoginSuccess.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "Home" initial = {true} />
         <Scene key = "createAccount" component = {CreateAccount} title = "About" />
         <Scene key = "loginSuccess" component = {LoginSuccess} title = "About" />

      </Scene>
   </Router>
)
export default Routes