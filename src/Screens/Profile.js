import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '50%' }}>
                <Image style={{ width: '100%', height: '90%' }} source={require('../../src/Assets/Profile/Rectangle.png')} />
                <TouchableOpacity>
                    <Image style={{ top: -310, right: 170 }} source={require('../../src/Assets/Profile/Vector.png')} />
                </TouchableOpacity>
                <Image style={{ top: -330, width: "20%", height: 20 }} source={require('../../src/Assets/Profile/Profile.png')} />
            </View>
            <View style={{ justifyContent: "center", alignItems: 'center', }}>
                <Image style={{ top: -290, height: 110, width: 110 }} source={require('../Assets/Profile/person.png')} />
                <Image style={{ top: -270, width: 200, height: 18, }} source={require('../Assets/Profile/welcomeUser.png')} />
                <Image style={{ top: -250, width: 120, height: 12, }} source={require('../Assets/Profile/user@email.com.png')} />
            </View>
            <View style={{top: -150, height: '100%'}}>
                <Image style={{ top: -160, width: 600,height: 600, left: -100 }} source={require('../Assets/Profile/linesBg.png')} />
                <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Image style={{ top: -600, width: 160, height: 160, left: 20 }} source={require('../Assets/Profile/rect1.png')} />
                    <Image style={{ top: -720, width: 50, height: 50, left: 75 }} source={require('../Assets/Profile/prsn.png')} />
                    <Image style={{ top: -710, width: 60, height: 23, left: 70 }} source={require('../Assets/Profile/pf.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{ top: -600, width: 160, height: 160, left: 50 }} source={require('../Assets/Profile/rect2.png')} />
                    <Image style={{ top: -720, width: 50, height: 50, left: 103 }} source={require('../Assets/Profile/pink.png')} />
                    <Image style={{ top: -760, width: 25, height: 25, left: 115 }} source={require('../Assets/Profile/sv1.png')} />
                    <Image style={{ top: -735, width: 60, height: 23, left: 100 }} source={require('../Assets/Profile/sv.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', top: -80 }}>
                <TouchableOpacity>
                    <Image style={{ top: -600, width: 160, height: 160, left: 20 }} source={require('../Assets/Profile/rect2.png')} />
                    <Image style={{ top: -720, width: 51, height: 50, left: 80 }} source={require('../Assets/Profile/p.png')} />
                    <Image style={{ top: -760, width: 25, height: 25, left: 95 }} source={require('../Assets/Profile/key.png')} />
                    <Image style={{ top: -735, width: 50, height: 23, left: 80 }} source={require('../Assets/Profile/cp.png')} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={{ top: -600, width: 160, height: 160, left: 50 }} source={require('../Assets/Profile/rect2.png')} />
                    <Image style={{ top: -720, width: 51, height: 50, left: 103 }} source={require('../Assets/Profile/green.png')} />
                    <Image style={{ top: -760, width: 25, height: 23, left: 117 }} source={require('../Assets/Profile/g2.png')} />
                    <Image style={{ top: -735, width: 39, height: 23, left: 110 }} source={require('../Assets/Profile/sa.png')} />
                </TouchableOpacity>
            </View>
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
        top: 180,
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