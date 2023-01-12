import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'

export default function ChangePassword() {
  return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '50%' }}>
                <Image style={{ width: '100%', height: '90%' }} source={require('../../src/Assets/Profile/Rectangle.png')} />
                <TouchableOpacity>
                    <Image style={{ top: -315, right: 170 }} source={require('../../src/Assets/Profile/Vector.png')} />
                </TouchableOpacity>
                <Image style={{ top: -330, width: 150, height: 18 }} source={require('../../src/Assets/Profile/ChangePassword.png')} />
            </View>
            <View style={{ justifyContent: "center", alignItems: 'center', }}>
                <Image style={{ top: -290, height: 110, width: 110 }} source={require('../Assets/Profile/person.png')} />
                <Image style={{ top: -270, width: 200, height: 20, }} source={require('../Assets/Profile/welcomePeter.png')} />
                <Image style={{ top: -250, width: 120, height: 12, }} source={require('../Assets/Profile/user@email.com.png')} />
            </View>
            <View style={{top: -150, height: '100%'}}>
                <Image style={{ top: -160, width: 600,height: 600, left: -100 }} source={require('../Assets/Profile/linesBg.png')} />
                <View style={{ flexDirection: 'row' }}>
            </View>
            <View style={{ justifyContent: "center", top: -120}}>      
                                <Image style={{ top: -460, left: 25,width: 112, height: 11 }} source={require('../../src/Assets/Profile/CurrentPassword.png')} />
                                <TouchableOpacity>
                                    <Image style={{ top: -440, left: 25, }} source={require('../../src/Assets/Profile/..png')} />
                                    <Image style={{ top: -455, left: 355, }} source={require('../../src/Assets/Profile/eye.png')} />
                                    <Image style={{ top: -440, left: 10 }} source={require('../../src/Assets/line.png')} />
                                </TouchableOpacity>
                                <Image style={{ top: -425, left: 25, width: 100, height: 10 }} source={require('../../src/Assets/Profile/np.png')} />

                                <TouchableOpacity>
                                    <Image style={{ top: -405, left: 25, }} source={require('../../src/Assets/Profile/..png')} />
                                    <Image style={{ top: -415, left: 355, }} source={require('../../src/Assets/Profile/eye.png')} />
                                    <Image style={{ top: -405, left: 10 }} source={require('../../src/Assets/line.png')} />
                                </TouchableOpacity>
                                <Image style={{ top: -390, left: 25, width: 115, height: 10 }} source={require('../../src/Assets/Profile/ConfirmPassword.png')} />

                                <TouchableOpacity>
                                    <Image style={{ top: -375, left: 25,width: 65, height:3 }} source={require('../../src/Assets/Profile/..png')} />
                                    <Image style={{ top: -380, left: 355, }} source={require('../../src/Assets/Profile/eye.png')} />
                                    <Image style={{ top: -370, left: 10 }} source={require('../../src/Assets/line.png')} />
                                </TouchableOpacity>
            </View>
            <TouchableOpacity>
            <Image style={styles.loginButton2} source={require('../../src/Assets/loginButton.png')} />
            <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, fontWeight: 'bold', position: "absolute", top: -400 }}>Update</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#15172C'
    },
    firstImage: {
        height: 143,
        width: 143,
        left: 120,
        top: 120,
        borderRadius: 0,
        position: 'absolute'
    },
    firstName: {
        height: 15,
        width: 15,
        right: 10,
        top: 110,
        borderRadius: 0,
        position: 'absolute'
    },

    lastName: {
        height: 15,
        width: 15,
        right: 10,
        top: 30,
        borderRadius: 0,
        position: 'absolute'
    },

    loginButton2: {
        top: -425,
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