import React from 'react'
// import Routes from './src/constants/routes'
import { View, Text } from 'react-native'

// import Header from './src/Components/Header'
// import Sales from './src/Components/Sales'
import BuyCoin from './src/Components/BuyCoin'
// import Tokens from './src/Components/Tokens'
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
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='FrontPage'>
        <Stack.Screen name="FrontPage" component={FrontPage} options={{ title: ' ',  headerStyle: { backgroundColor: '#161729'} , headerTintColor: 'white' }} />
        <Stack.Screen name="BuyCoin" component={BuyCoin} options={{ title: ' ',  headerStyle: { backgroundColor: '#161729'} , headerTitleStyle:{fontWeight: 'bold',fontSize: 20}}}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ title: 'Create New Account',  headerStyle: { backgroundColor: '#161729'} , headerTintColor: 'white', headerTitleStyle:{fontWeight: 'bold',fontSize: 20}}} />
        <Stack.Screen name="Login"  component={Login} options={{ title: ' ',  headerStyle: { backgroundColor: '#161729'} , headerTitleStyle:{fontWeight: 'bold',fontSize: 20}}}/>
        <Stack.Screen name="LoginSuccess" component={LoginSuccess} options={{ title: 'Log into your account',  headerStyle: { backgroundColor: '#161729'} , headerTintColor: 'white', headerTitleStyle:{fontWeight: 'bold',fontSize: 20}}}/>
        <Stack.Screen name="Wallet" component={Wallet} options={{ title: ' ',  headerStyle: { backgroundColor: '#161729'} , headerTitleStyle:{fontWeight: 'bold',fontSize: 20}}}/>
        <Stack.Screen name="CreateAccount1" component={CreateAccount1} options={{ title: 'Create New Account',  headerStyle: { backgroundColor: '#161729'} , headerTintColor: 'white', headerTitleStyle:{fontWeight: 'bold',fontSize: 20}}} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ResetPassword1" component={ResetPassword1} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile',  headerStyle: { backgroundColor: '#161729'} , headerTintColor: 'white', headerTitleStyle:{fontWeight: 'bold',fontSize: 20}}}/>
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: 'Edit Profile',  headerStyle: { backgroundColor: '#161729'} , headerTintColor: 'white', headerTitleStyle:{fontWeight: 'bold',fontSize: 20}}} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Verification" component={Verification} options={{ title: 'ID Verification',  headerStyle: { backgroundColor: '#161729'} , headerTintColor: 'white', headerTitleStyle:{fontWeight: 'bold',fontSize: 20}}}/>
        {/* <Stack.Screen name="BuyCoin" component={BuyCoin} /> */}
        {/* <Stack.Screen name="BuyCoin" component={BuyCoin} /> */}
        {/* <Stack.Screen name="BuyCoin" component={BuyCoin} /> */}
        {/* <Stack.Screen name="BuyCoin" component={BuyCoin} /> */}


        {/* <Stack.Screen name="About" component={AboutScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>


    // <View style={{flex:1}}>
    //   <Verification />
    //   <ChangePassword />
    //   <EditProfile />
    //   <Profile />
    //   <Wallet />
    //   <ResetPassword1 />
    //   <ResetPassword />
    //   <CreateAccount1 />
    //   <CreateAccount />
    //   <Login />
    //   <LoginSuccess />
    //   <FrontPage />
    //   <Header />
    //   <BuyCoin />
    // </View>
  )
}