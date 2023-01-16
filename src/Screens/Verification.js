import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native'

export default function Verification() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '50%' }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../../src/Assets/Profile/Verification/Rectangle.png')} />
                
            </View>
            <View style={{ justifyContent: "center",marginTop: -50 }}>
                <Image style={{ top: -270, height: 50, width: 50, left: 25 }} source={require('../Assets/Profile/Verification/call.png')} />
                <Image style={{ top: -305, height: 10, width: 85, left: 90 }} source={require('../Assets/Profile/Verification/num.png')} />
                <Image style={{ top: -300, height: 10, width: 210, left: 90 }} source={require('../Assets/Profile/Verification/valid.png')} />
                <Image style={{ top: -270, height: 50, width: 290, left: 20 }} source={require('../Assets/Profile/Verification/Rect.png')} />
                <TouchableOpacity>
                    <Image style={{ top: -300, height: 10, width: 55, left: 60 }} source={require('../Assets/Profile/Verification/otp.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{ top: -305, height: 6, width: 70, left: 310 }} source={require('../Assets/Profile/Verification/code.png')} />
                </TouchableOpacity>
                <Image style={{ top: -260, alignItems: 'center', left: 20 }} source={require('../Assets/Profile/Verification/Line.png')} />
                <TouchableOpacity>
                    <Image style={{ top: -225, width: 55, height: 20, left: 170 }} source={require('../../src/Assets/Profile/Verification/Verify.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ top: -150, height: '100%' }}>
                <Image style={{ top: -160, width: 600, height: 600, left: -100 }} source={require('../Assets/Profile/linesBg.png')} />
                <View style={{}}>
                    <Image style={{ top: -600, width: 150, height: 15, left: 20 }} source={require('../Assets/Profile/Verification/identity.png')} />
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Image style={{ top: -580, width: 50, height: 50, left: 30 }} source={require('../Assets/Profile/Verification/Group3.png')} />
                        <Image style={{ top: -620, width: 90, height: 10, left: 90 }} source={require('../Assets/Profile/Verification/id.png')} />
                        <Image style={{ top: -615, width: 90, height: 10, left: 90 }} source={require('../Assets/Profile/Verification/approval.png')} />
                        <Image style={{ top: -630, width: 12, height: 12, left: 360 }} source={require('../Assets/Profile/Verification/approvalIcon.png')} />
                        <Image style={{ top: -605, alignItems: 'center', left: 20 }} source={require('../Assets/Profile/Verification/Line.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Image style={{ top: -580, width: 50, height: 50, left: 30 }} source={require('../Assets/Profile/Verification/Group2.png')} />
                        <Image style={{ top: -620, width: 50, height: 10, left: 90 }} source={require('../Assets/Profile/Verification/Passport.png')} />
                        <Image style={{ top: -615, width: 40, height: 10, left: 90 }} source={require('../Assets/Profile/Verification/Rejected.png')} />
                        <Image style={{ top: -630, width: 12, height: 12, left: 360 }} source={require('../Assets/Profile/Verification/RejectedIcon.png')} />
                        <Image style={{ top: -605, alignItems: 'center', left: 20 }} source={require('../Assets/Profile/Verification/Line.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Image style={{ top: -580, width: 50, height: 50, left: 30 }} source={require('../Assets/Profile/Verification/Group1.png')} />
                        <Image style={{ top: -620, width: 90, height: 10, left: 90 }} source={require('../Assets/Profile/Verification/license.png')} />
                        <Image style={{ top: -615, width: 40, height: 10, left: 90 }} source={require('../Assets/Profile/Verification/Rejected-1.png')} />
                        <Image style={{ top: -630, width: 12, height: 12, left: 360 }} source={require('../Assets/Profile/Verification/Rejected-1Icon.png')} />
                        <Image style={{ top: -605, alignItems: 'center', left: 20 }} source={require('../Assets/Profile/Verification/Line.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: "center", top: -150 }}>
                </View>
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={{ top: 180 }}>
                            <Image style source={require('../../src/Assets/rect6.png')}></Image>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <Image style={{ top: -495, left: 360 }} source={require('../../src/Assets/x.png')} />
                            </TouchableOpacity>
                            <Image style={{ top: -480, left: 110 }} source={require('../../src/Assets/Profile/Verification/up.png')} />
                            <Image style={{ alignSelf: 'center', top: -450 }} source={require('../../src/Assets/Profile/Verification/i1.png')} />
                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <Image style={{ alignSelf: 'center', top: -430, left: 40 }} source={require('../../src/Assets/Profile/Verification/1.png')} />
                                <Image style={{ alignSelf: 'center', top: -430, left: 175 }} source={require('../../src/Assets/Profile/Verification/2.png')} />
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <Image style={{ alignSelf: 'center', top: -440, left: 20 }} source={require('../../src/Assets/Profile/Verification/rectBlue.png')} />
                                <Image style={{ alignSelf: 'center', top: -440 }} source={require('../../src/Assets/Profile/Verification/rectFaded.png')} />
                            </View>

                            <TouchableOpacity>
                                <Image style={{ top: -535, left: 65 }} source={require('../../src/Assets/Profile/Verification/choose.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{ top: -590, left: 245 }} source={require('../../src/Assets/Profile/Verification/choose.png')} />
                            </TouchableOpacity>

                            <View style={{ justifyContent: 'center' }}>
                                <Image style={{ top: -530, left: 70 }} source={require('../../src/Assets/Profile/Verification/plzz.png')} />
                            </View>
                            <Image style={styles.loginButton2} source={require('../../src/Assets/loginButton.png')} />
                            <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, fontWeight: 'bold', position: "absolute", top: 450 }}>Upload</Text>


                        </View>
                    </View>
                </Modal>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131222'
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
        top: 425,
        position: 'absolute',
        width: 200,
        alignItems: "center",
        height: 75,
        left: 110
    },
    loginButton3: {
        top: 270,
        position: 'absolute',
        width: 160,
        alignItems: "center",
        left: 125,
        padding: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
})