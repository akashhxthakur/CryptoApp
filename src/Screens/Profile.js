import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import EditProfile from './EditProfile';
import Verification from './Verification';
import ChangePassword from './ChangePassword';

export default function Profile() {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '50%' }}>
                <Image style={{ top: -360, width: "20%", height: 20 }} source={require('../../src/Assets/Profile/Profile.png')} />
            </View>
            <View style={{ justifyContent: "center", alignItems: 'center', }}>
                <Image style={{ top: -290, height: 110, width: 110 }} source={require('../Assets/Profile/person.png')} />
                <Image style={{ top: -270, width: 200, height: 18, }} source={require('../Assets/Profile/welcomeUser.png')} />
                <Image style={{ top: -250, width: 120, height: 12, }} source={require('../Assets/Profile/user@email.com.png')} />
            </View>
            <View style={{ top: -150, height: '100%' }}>
                <Image style={{ top: -160, width: 600, height: 600, left: -100 }} source={require('../Assets/Profile/linesBg.png')} />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate(EditProfile)}>
                        <Image style={{ top: -600, width: 160, height: 160, left: 20 }} source={require('../Assets/Profile/rect1.png')} />
                        <Image style={{ top: -720, width: 50, height: 50, left: 75 }} source={require('../Assets/Profile/prsn.png')} />
                        <Image style={{ top: -710, width: 60, height: 23, left: 70 }} source={require('../Assets/Profile/pf.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate(Verification)}>
                        <Image style={{ top: -600, width: 160, height: 160, left: 50 }} source={require('../Assets/Profile/rect2.png')} />
                        <Image style={{ top: -720, width: 50, height: 50, left: 103 }} source={require('../Assets/Profile/pink.png')} />
                        <Image style={{ top: -760, width: 25, height: 25, left: 115 }} source={require('../Assets/Profile/sv1.png')} />
                        <Image style={{ top: -735, width: 60, height: 23, left: 100 }} source={require('../Assets/Profile/sv.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', top: -80 }}>
                    <TouchableOpacity onPress={() => navigation.navigate(ChangePassword)}>
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
            {/* <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View >
                        <Image style source={require('../../src/Assets/Profile/Sidebar/rect.png')}></Image>
                        <View style={{ top: -1110 }}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <Image style={{ left: 15, height: 20, width: 20 }} source={require('../../src/Assets/x.png')} />
                            </TouchableOpacity>
                            <Image style={{ width: 78, height: 20, left: 125, top: -20 }} source={require('../../src/Assets/Profile/Profile.png')} />
                            <Image style={{ width: "20%", height: 80, left: 125 }} source={require('../../src/Assets/Profile/person.png')} />
                            <Image style={{ top: 10, width: 200, height: 18, left: 70 }} source={require('../../src/Assets/Profile/welcomeUser.png')} />
                            <Image style={{ top: 30, width: 250, height: 1, left: 50 }} source={require('../../src/Assets/Profile/Sidebar/--.png')} />
                            <ScrollView style={{ top: 40, height: '100%' }}>
                                <TouchableOpacity>
                                    <Image style={{ top: 10, width: 250, height: 40, left: 50 }} source={require('../../src/Assets/Profile/Sidebar/rect1.png')} />
                                    <Image style={{ top: -18, width: 16, height: 15, left: 65 }} source={require('../../src/Assets/Profile/Sidebar/dash.png')} />
                                    <Image style={{ top: -30, width: 70, height: 10, left: 110 }} source={require('../../src/Assets/Profile/Sidebar/Dashboard.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={{ top: -1, width: 16, height: 15, left: 65 }} source={require('../../src/Assets/Profile/Sidebar/c.png')} />
                                    <Image style={{ top: -15, width: 50, height: 12, left: 110 }} source={require('../../src/Assets/Profile/Sidebar/bc.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop: 10 }}>
                                    <Image style={{ top: -1, width: 16, height: 15, left: 65 }} source={require('../../src/Assets/Profile/Sidebar/sr.png')} />
                                    <Image style={{ top: -15, width: 80, height: 12, left: 110 }} source={require('../../src/Assets/Profile/Sidebar/Send/Receive.png')} />
                                    <Image style={{ top: -25, width: 5, height: 5, left: 280 }} source={require('../../src/Assets/Profile/Sidebar/v.png')} />

                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop: 10 }}>
                                    <Image style={{ top: -1, width: 12, height: 15, left: 65 }} source={require('../../src/Assets/Profile/Sidebar/t.png')} />
                                    <Image style={{ top: -15, width: 130, height: 10, left: 110 }} source={require('../../src/Assets/Profile/Sidebar/st.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop: 10 }}>
                                    <Image style={{ top: -1, width: 16, height: 15, left: 65 }} source={require('../../src/Assets/Profile/Sidebar/w.png')} />
                                    <Image style={{ top: -15, width: 40, height: 11, left: 110 }} source={require('../../src/Assets/Profile/Sidebar/Wallet.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop: 10 }}>
                                    <Image style={{ top: -1, width: 16, height: 15, left: 65 }} source={require('../../src/Assets/Profile/Sidebar/s.png')} />
                                    <Image style={{ top: -15, width: 60, height: 12, left: 110 }} source={require('../../src/Assets/Profile/Sidebar/sc.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop: 10 }}>
                                    <Image style={{ top: -1, width: 12, height: 15, left: 65 }} source={require('../../src/Assets/Profile/Sidebar/$.png')} />
                                    <Image style={{ top: -15, width: 110, height: 12, left: 110 }} source={require('../../src/Assets/Profile/Sidebar/th.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop: 10 }}>
                                    <Image style={{ top: -1, width: 15, height: 15, left: 65 }} source={require('../../src/Assets/Profile/Sidebar/a.png')} />
                                    <Image style={{ top: -15, width: 80, height: 10, left: 110 }} source={require('../../src/Assets/Profile/Sidebar/ab.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop: 10 }}>
                                    <Image style={{ top: -1, width: 16, height: 15, left: 65 }} source={require('../../src/Assets/Profile/Sidebar/o.png')} />
                                    <Image style={{ top: -15, width: 35, height: 10, left: 110 }} source={require('../../src/Assets/Profile/Sidebar/Offer.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop: 10 }}>
                                    <Image style={{ top: -1, width: 15, height: 15, left: 65 }} source={require('../../src/Assets/Profile/Sidebar/q.png')} />
                                    <Image style={{ top: -15, width: 22, height: 10, left: 110 }} source={require('../../src/Assets/Profile/Sidebar/FAQ.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop: 10 }}>
                                    <Image style={{ top: -1, width: 16, height: 15, left: 65 }} source={require('../../src/Assets/Profile/Sidebar/set.png')} />
                                    <Image style={{ top: -15, width: 50, height: 12, left: 110 }} source={require('../../src/Assets/Profile/Sidebar/Settings.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop: 10 }}>
                                    <Image style={{ top: -1, width: 16, height: 14, left: 65 }} source={require('../../src/Assets/Profile/Sidebar/out.png')} />
                                    <Image style={{ top: -15, width: 44, height: 13, left: 110 }} source={require('../../src/Assets/Profile/Sidebar/Log.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop: 10 }}>
                                    <Image style={{ top: -5, width: 50, height: 9, left: 65 }} source={require('../../src/Assets/Profile/Sidebar/visit.png')} />
                                </TouchableOpacity>
                                <Image style={{ top: 5, width: 100, height: 10, left: 90 }} source={require('../../src/Assets/Profile/Sidebar/nov.png')} />
                                <Image style={{ top: -5, width: 40, height: 8, left: 195 }} source={require('../../src/Assets/Profile/Sidebar/time.png')} />
                                <Image style={{ top: 0, width: 250, height: 1, left: 50 }} source={require('../../src/Assets/Profile/Sidebar/line.png')} />
                                <Image style={{ top: 10, width: 30, height: 30, left: 65 }} source={require('../../src/Assets/Profile/Sidebar/prsn.png')} />
                                <Image style={{ top: -12, width: 100, height: 13, left: 110 }} source={require('../../src/Assets/Profile/Sidebar/peter.png')} />

                            </ScrollView>

                        </View>
                    </View>
                </Modal>
            </View> */}
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-start',
    },
})