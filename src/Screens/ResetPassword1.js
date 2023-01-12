import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'

export default function ResetPassword1() {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 20 }}>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 25, fontWeight: 'bold' }}>Reset password</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, height: '50%' }}>
                <Image source={require('../../src/Assets/eclipse2.png')} />
                <Image style={styles.firstImage} source={require('../../src/Assets/frontPage.png')} />
            </View>
            <View style={{}}>
                <View style={{ justifyContent: "center" }}>
                    <Image source={require('../../src/Assets/loginBg.png')} />
                    <Text style={{ color: 'white', position: 'absolute', fontSize: 15, fontWeight: 'bold', left: 20, top: 10 }}>Enter Code</Text>
                    <Image style={styles.code} source={require('../../src/Assets/1234568.png')} />
                    <Text style={{ color: 'white', position: 'absolute', fontSize: 15, fontWeight: 'bold', left: 20, top: 70 }}> New Password</Text>
                    <TextInput style={{ color: "grey", fontSize: 15, position: 'absolute', left: 18, top: 80 }} secureTextEntry={true} placeholder='Enter password'></TextInput>
                    <Image style={styles.eye} source={require('../../src/Assets/eye.png')} />
                    <Text style={{ color: 'white', position: 'absolute', fontSize: 15, fontWeight: 'bold', left: 20, top: 130 }}>Confirm Password</Text>

                    <TextInput style={{ color: "grey", fontSize: 15, position: 'absolute', left: 18, top: 140 }} secureTextEntry={true} placeholder='Confirm password'></TextInput>
                    <Image style={styles.verify} source={require('../../src/Assets/verify.png')} />
                    <Image style={styles.validationMssg} source={require('../../src/Assets/validationMssg.png')} />
                    {/* <Text style={{ color: 'grey', position: 'absolute', fontSize: 10, fontWeight: 'bold', top: 155, right: 10 }}>Forgot password ?</Text> */}
                    <Image style={styles.loginButton2} source={require('../../src/Assets/loginButton.png')} />
                    <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, fontWeight: 'bold', position: "absolute", top: 235 }}>Sign In</Text>
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
    code: {
        top: 40,
        position: 'absolute',
        width: 100,
        height: 10,
        left: 20
    },

    eye: {
        height: 10,
        width: 15,
        right: 10,
        top: 80,
        borderRadius: 0,
        position: 'absolute'
    },
    verify: {
        height: 15,
        width: 15,
        right: 10,
        top: 140,
        borderRadius: 0,
        position: 'absolute'
    },

    validationMssg: {
        top: 180,
        position: 'absolute',
        width: 170,
        alignItems: "center",
        height: 20,
        right: 10
    },

    loginButton2: {
        top: 210,
        position: 'absolute',
        width: 200,
        alignItems: "center",
        height: 75,
        left: 100
    },

})