import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Wallet from './Wallet';

export default function LoginSuccess() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -30, height: '50%' }}>
                <Image source={require('../../src/Assets/eclipse2.png')} />
                <Image style={styles.firstImage} source={require('../../src/Assets/frontPage.png')} />
            </View>
            <View style={{marginTop: 60}}>
                <View style={{ justifyContent: "center" }}>
                    <Image source={require('../../src/Assets/loginBg.png')} />
                    <Image style={styles.loginSuccess} source={require('../../src/Assets/success.png')} />
                    <Image style={styles.successMssg} source={require('../../src/Assets/successMssg.png')} />
                    <Image style={styles.loginButton2} source={require('../../src/Assets/loginButton.png')} />
                    <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, fontWeight: 'bold', position: "absolute", top: 225 }} onPress={() =>navigation.navigate(Wallet)}>Done</Text>

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
        top: 115,
        borderRadius: 0,
        position: 'absolute'
    },
    loginSuccess: {
        top: -20,
        position: 'absolute',
        width: 350,
        alignItems: "center",
        height: 200,
        left: 20
    },
    successMssg:{
        top: 150,
        position: 'absolute',
        width: 170,
        alignItems: "center",
        height: 30,
        left: 110
    },

    loginButton2: {
        top: 200,
        position: 'absolute',
        width: 200,
        alignItems: "center",
        height: 75,
        left: 100
    },

})