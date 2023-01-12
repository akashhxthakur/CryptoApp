import React from 'react'
import Header from './src/Components/Header'
import Sales from './src/Components/Sales'
import BuyCoin from './src/Components/BuyCoin'
import { View, Text } from 'react-native'
import Tokens from './src/Components/Tokens'
import FrontPage from './src/Screens/FrontPage'
import Login from './src/Screens/Login'
import CreateAccount from './src/Screens/CreateAccount'
import CreateAccount1 from './src/Screens/CreateAccount1'
import ResetPassword from './src/Screens/ResetPassword'
import ResetPassword1 from './src/Screens/ResetPassword1'
import LoginSuccess from './src/Screens/LoginSuccess'
import Wallet from './src/Screens/Wallet'
import Profile from './src/Screens/Profile'



export default function App() {
  return (
    <View style={{flex:1}}>
      <Profile />
      {/* <Wallet />
      <LoginSuccess />
      <ResetPassword1 />
      <ResetPassword />
      <CreateAccount1 />
      <CreateAccount />
      <Login />
      <FrontPage />
      <Header />
      <BuyCoin /> */}
    </View>
  )
}