import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'

export default function EditProfile() {
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '50%' }}>
                <Image style={{ width: '100%', height: '90%' }} source={require('../../src/Assets/Profile/Rectangle.png')} />
                <TouchableOpacity>
                    <Image style={{ top: -310, right: 170 }} source={require('../../src/Assets/Profile/Vector.png')} />
                </TouchableOpacity>
                <Image style={{ top: -330, width: 100, height: 15 }} source={require('../../src/Assets/Profile/EditProfile.png')} />
            </View>
            <View style={{ justifyContent: "center", alignItems: 'center', }}>
                <Image style={{ top: -290, height: 110, width: 110 }} source={require('../Assets/Profile/person.png')} />
                <Image style={{ top: -325, left: 40, }} source={require('../../src/Assets//Profile/cam.png')} />
                <Image style={{ top: -270, width: 200, height: 20, }} source={require('../Assets/Profile/welcomePeter.png')} />
                <Image style={{ top: -250, width: 120, height: 12, }} source={require('../Assets/Profile/user@email.com.png')} />
            </View>
            <View style={{top: -150, height: '100%'}}>
                <Image style={{ top: -160, width: 600,height: 600, left: -100 }} source={require('../Assets/Profile/linesBg.png')} />
                <View style={{ flexDirection: 'row' }}>
            </View>
            <View style={{ justifyContent: "center", top: -150}}>      
                                <Image style={{ top: -460, left: 25,width: 65, height: 10 }} source={require('../../src/Assets/Profile/fName.png')} />
                                <TouchableOpacity>
                                    <Image style={{ top: -450, left: 25, }} source={require('../../src/Assets/Profile/Mr.png')} />
                                    {/* <Image style={{ top: -440, left: 360, }} source={require('../../src/Assets/arrow.png')} /> */}
                                    <Image style={{ top: -440, left: 10 }} source={require('../../src/Assets/line.png')} />
                                </TouchableOpacity>
                                <Image style={{ top: -425, left: 25, width: 65, height: 10 }} source={require('../../src/Assets/Profile/lname.png')} />

                                <TouchableOpacity>
                                    <Image style={{ top: -415, left: 25, }} source={require('../../src/Assets/Profile/Mr.png')} />
                                    {/* <Image style={{ top: -400, left: 360, }} source={require('../../src/Assets/arrow.png')} /> */}
                                    <Image style={{ top: -405, left: 10 }} source={require('../../src/Assets/line.png')} />
                                </TouchableOpacity>
                                <Image style={{ top: -395, left: 25, width: 80, height: 10 }} source={require('../../src/Assets/Profile/mail.png')} />

                                <TouchableOpacity>
                                    <Image style={{ top: -390, left: 25,width: 100, height: 11 }} source={require('../../src/Assets/Profile/user@email.comm.png')} />
                                    {/* <Image style={{ top: -360, left: 360, }} source={require('../../src/Assets/arrow.png')} /> */}
                                    <Image style={{ top: -380, left: 10 }} source={require('../../src/Assets/line.png')} />
                                </TouchableOpacity>
                                <Image style={{ top: -365, left: 25, width: 50, height: 12}} source={require('../../src/Assets/Profile/Country.png')} />

                                <TouchableOpacity>
                                    <Image style={{ top: -358, left: 25,  width: 30, height: 11}} source={require('../../src/Assets/Profile/india.png')} />
                                    <Image style={{ top: -370, left: 360, }} source={require('../../src/Assets//Profile/v.png')} />
                                    <Image style={{ top: -356, left: 10 }} source={require('../../src/Assets/line.png')} />
                                </TouchableOpacity>
                                <Image style={{ top: -345, left: 25, width: 40, height: 10}} source={require('../../src/Assets/Profile/Phone.png')} />

                                <TouchableOpacity>
                                    <Image style={{ top: -335, left: 25,  width: 110, height: 8}} source={require('../../src/Assets/Profile/235469856321456.png')} />
                                    {/* <Image style={{ top: -360, left: 360, }} source={require('../../src/Assets/arrow.png')} /> */}
                                    <Image style={{ top: -325, left: 10 }} source={require('../../src/Assets/line.png')} />
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
        top: 285,
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