import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function FrontPage() {
    return (

        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, height: '50%' }}>
                <Image source={require('../../src/Assets/eclipse2.png')} />
                <Image style={styles.firstImage} source={require('../../src/Assets/frontPage.png')} />
            </View>
            <View>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 25, fontWeight: 'bold' }}>Create a free Account</Text>
            </View>
            <View style={{ height: '40%', justifyContent: "center" }}>
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                    <TouchableOpacity>

                        <Image style={styles.loginButton} source={require('../../src/Assets/loginButton.png')} />
                        <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, fontWeight: 'bold', position: "absolute", top: 24 }}>Create Account</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 30, alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image style={styles.loginButton2} source={require('../../src/Assets/loginButton.png')} />
                        <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, fontWeight: 'bold', position: "absolute", top: 24 }}>Login</Text>
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
    loginButton: {
        // position: 'absolute',
        width: 200,
        alignItems: "center",
        height: 75,
        // left: 100,
        // top: 30,
    },
    loginButton2: {
        // position: 'absolute',
        width: 200,
        height: 75,
        alignItems: 'center'
        // left: -80,
        // top: 30,
    }
})