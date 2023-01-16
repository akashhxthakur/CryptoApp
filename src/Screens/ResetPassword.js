import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import ResetPassword1 from './ResetPassword1'
import { useNavigation } from '@react-navigation/native'


export default function ResetPassword() {
    const navigation = useNavigation();

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
                    <Text style={{ color: 'white', position: 'absolute', fontSize: 15, fontWeight: 'bold', left: 20, top: 20 }}>Enter email address</Text>
                    <Text style={{ color: "grey", fontSize: 10, position: 'absolute', left: 18, top: 60, fontWeight: 'bold' }}>Enter the email address with your account and we'll{'\n'}
                        send an email with confirmation reset your{'\n'}
                        password.</Text>

                    <Text style={{ color: 'white', position: 'absolute', fontSize: 15, fontWeight: 'bold', left: 20, top: 120 }}>Email</Text>
                    <TextInput style={{ color: "grey", fontSize: 15, position: 'absolute', left: 18, top: 140 }} placeholder='Enter email'></TextInput>
                    <Image style={styles.emailIcon} source={require('../../src/Assets/emailIcon.png')} />

                    <Image style={styles.loginButton2} source={require('../../src/Assets/loginButton.png')} />
                    <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, fontWeight: 'bold', position: "absolute", top: 225 }} onPress={() => navigation.navigate(ResetPassword1)}>Continue</Text>

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
    emailIcon: {
        height: 10,
        width: 15,
        right: 10,
        top: 125,
        borderRadius: 0,
        position: 'absolute'
    },

    loginButton2: {
        top: 200,
        position: 'absolute',
        width: 200,
        alignItems: "center",
        height: 75,
        left: 100
    },
    loginButton3: {
        top: 270,
        position: 'absolute',
        width: 160,
        alignItems: "center",
        left: 125,
        padding: 5
    }
})