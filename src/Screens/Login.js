import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import LoginSuccess from './LoginSuccess';
import CreateAccount from './CreateAccount';
import ResetPassword from './ResetPassword';


export default function Login() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View >
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 25, fontWeight: 'bold' }}>Log into your account</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -20, height: '50%' }}>
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
                    <TouchableOpacity>
                    <Text style={{ color: 'grey', position: 'absolute', fontSize: 10, fontWeight: 'bold', top: -230, right: 10 }} onPress={() => navigation.navigate(ResetPassword)}>Forgot password ?</Text>
                    </TouchableOpacity>
                    <Image style={styles.loginButton2} source={require('../../src/Assets/loginButton.png')} />
                    <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, fontWeight: 'bold', position: "absolute", top: 205 }} onPress={() => navigation.navigate(LoginSuccess)}>Sign In</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(CreateAccount)}>
                        <Image style={styles.loginButton3} source={require('../../src/Assets/createnewaccount.png')} />
                    </TouchableOpacity>

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

    loginButton2: {
        top: 180,
        position: 'absolute',
        width: 200,
        alignItems: "center",
        height: 75,
        left: 100
    },
    loginButton3: {
        top: -115,
        position: 'absolute',
        width: 160,
        alignItems: "center",
        left: 125,
        padding: 5
    }
})