import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import Login from './Login'
import { useNavigation } from '@react-navigation/native'

export default function CreateAccount1() {
    const navigation = useNavigation();

  return (
<View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -40, height: '50%' }}>
                <Image source={require('../../src/Assets/eclipse2.png')} />
                <Image style={styles.firstImage} source={require('../../src/Assets/frontPage.png')} />
            </View>
            <View style={{}}>
                <View style={{ justifyContent: "center" }}>
                <Image source={require('../../src/Assets/loginBg.png')} />
                    <Text style={{ color: 'white', position: 'absolute', fontSize: 15, fontWeight: 'bold', left: 20, top: 20 }}>Email</Text>
                    <TextInput style={{ color: "grey", fontSize: 15, position: 'absolute', left: 18, top: 40 }} placeholder='Enter your email'></TextInput>
                    <Text style={{ color: 'white', position: 'absolute', fontSize: 15, fontWeight: 'bold', left: 20, top: 100 }}>Password</Text>
                    <TextInput style={{ color: "grey", fontSize: 15, position: 'absolute', left: 18, top: 120 }} secureTextEntry={true} placeholder='Enter password'></TextInput>
                    <Image style={styles.eye} source={require('../../src/Assets/eye.png')} />
                    <Text style={{ color: 'white', position: 'absolute', fontSize: 15, fontWeight: 'bold', left: 20, top: 170 }}>Confirm Password</Text>

                    <TextInput style={{ color: "grey", fontSize: 15, position: 'absolute', left: 18, top: 190 }} secureTextEntry={true} placeholder='Confirm password'></TextInput>
                    <Image style={styles.verify} source={require('../../src/Assets/verify.png')} />
                    {/* <Text style={{ color: 'grey', position: 'absolute', fontSize: 10, fontWeight: 'bold', top: 155, right: 10 }}>Forgot password ?</Text> */}
                    <Image style={styles.loginButton2} source={require('../../src/Assets/loginButton.png')} />
                    <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, fontWeight: 'bold', position: "absolute", top: 295 }}onPress={() =>navigation.navigate(Login)}>Sign Up</Text>
                    {/* <Image style={styles.loginButton3} source={require('../../src/Assets/createnewaccount.png')} /> */}

                    {/* <View style={{justifyContent: 'center' }}>
                    <TouchableOpacity>
                        <Image style={styles.loginButton2} source={require('../../src/Assets/loginButton.png')} />
                        <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, fontWeight: 'bold', position: "absolute", top: 24 }}>Sign In</Text>
                    </TouchableOpacity>
                </View> */}
                </View>

            </View>
        </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161729',

    },
    firstImage: {
        height: 143,
        width: 143,
        left: 120,
        top: 120,
        borderRadius: 0,
        position: 'absolute'
    },
    eye: {
        height: 10,
        width: 15,
        right: 10,
        top: 120,
        borderRadius: 0,
        position: 'absolute'
    },
    verify: {
        height: 15,
        width: 15,
        right: 10,
        top: 180,
        borderRadius: 0,
        position: 'absolute'
    },

    loginButton2: {
        top: 273,
        position: 'absolute',
        width: 200,
        alignItems: "center",
        height: 75,
        left: 100
    },

})