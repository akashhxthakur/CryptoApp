import React from 'react'
import Routes from './src/constants/routes'
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
import EditProfile from './src/Screens/EditProfile'
import ChangePassword from './src/Screens/ChangePassword'
import Verification from './src/Screens/Verification'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {
  return (
    <View style={{flex:1}}>
      {/* <Verification />
      <ChangePassword />
      <EditProfile />
      <Profile />
      <Wallet />
      <ResetPassword1 />
      <ResetPassword />
      <CreateAccount1 />
      <CreateAccount />
      <Login />
      <LoginSuccess />
      <FrontPage />
      <Header /> */}
      <BuyCoin />
    </View>
  )
}