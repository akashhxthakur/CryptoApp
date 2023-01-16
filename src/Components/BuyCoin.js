import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput, CheckBox, Button, Pressable, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Profile from '../Screens/Profile';

export default function BuyCoin() {
    // const [active , setactive] = useState(false);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#161729', }}>

                <View style={styles.head}>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Image source={require('../../src/Assets/dashboard.png')} style={{ height: 20, width: 20, color: '#02A3F7' }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', left: 10 }}>Buy Coin</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <TouchableOpacity>
                            <Image style={{ height: 21, width: 20, right: 10 }} source={require('../../src/Assets/off.png')} />

                        </TouchableOpacity><TouchableOpacity>
                            <Image style={{ height: 21, width: 20 }} source={require('../../src/Assets/notification.png')} />

                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{
                    justifyContent: 'center', marginTop: 30, flexDirection: 'row', justifyContent: 'space-between'
                }}>
                    <TouchableOpacity>
                        <Image style={{ height: 50, width: 128, left: 50 }} source={require('../../src/Assets/BuyCoin/bn.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={{ height: 10, width: 80, right: 50, top: 20 }} source={require('../../src/Assets/BuyCoin/bch.png')} />
                    </TouchableOpacity>

                </View>
                <Image style={{ top: 25, alignItems: 'center', left: 25, width: 350 }} source={require('../../src/Assets/line.png')} />

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slideIn"
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
                                <TouchableOpacity onPress={() => navigation.navigate(Profile)}>
                <Image style={{ width: "20%", height: 80, left: 125 }} source={require('../Assets/Profile/person.png')} />

                </TouchableOpacity>
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
                </View>
                <ScrollView style={{ top: 4, }}>
                    <View style={{ justifyContent: "center", marginTop: 30 }}>

                        <Image style={{ top: 0, alignItems: 'center', left: 25, height: 290, width: 350, }} source={require('../../src/Assets/BuyCoin/rect1.png')} />
                        <Image style={{ top: -260, alignItems: 'center', left: 140, width: 118, }} source={require('../../src/Assets/BuyCoin/sale.png')} />
                        <Image style={{ top: -240, alignItems: 'center', left: 100, width: 200, height: 20 }} source={require('../../src/Assets/BuyCoin/momentjs.png')} />
                        <Image style={{ top: -235, alignItems: 'center', left: 103, width: 200, height: 10 }} source={require('../../src/Assets/BuyCoin/days.png')} />

                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ top: -205, alignItems: 'center', left: 60, width: 90, height: 15 }} source={require('../../src/Assets/BuyCoin/start.png')} />
                            <Image style={{ top: -205, alignItems: 'center', left: 170, width: 75, height: 15 }} source={require('../../src/Assets/BuyCoin/end.png')} />
                            <Image style={{ top: -225, alignItems: 'center', width: 300, right: 110 }} source={require('../../src/Assets/line.png')} />
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ top: -200, alignItems: 'center', left: 65, width: 75, height: 10 }} source={require('../../src/Assets/BuyCoin/5.png')} />
                            <Image style={{ top: -200, alignItems: 'center', left: 185, width: 75, height: 10 }} source={require('../../src/Assets/BuyCoin/12.png')} />
                        </View>

                        <View style={{}}>
                            <Image style={{ top: -165, alignItems: 'center', width: 250, left: 75, height: 5 }} source={require('../../src/Assets/BuyCoin/bar.png')} />
                            <Image style={{ top: -169, alignItems: 'center', width: 15, left: 300, height: 3 }} source={require('../../src/Assets/BuyCoin/398.png')} />
                            <Image style={{ top: -176, alignItems: 'center', width: 12, left: 310, height: 12 }} source={require('../../src/Assets/BuyCoin/linear.png')} />
                            <Image style={{ top: -174, alignItems: 'center', width: 50, left: 75, height: 5 }} source={require('../../src/Assets/BuyCoin/298.png')} />
                            <Image style={{ top: -150, alignItems: 'center', width: 200, left: 105, height: 14 }} source={require('../../src/Assets/BuyCoin/flex.png')} />

                        </View>


                    </View>
                    <View style={{ justifyContent: "center", }}>

                        <Image style={{ top: -100, alignItems: 'center', left: 25, height: 200, width: 350, }} source={require('../../src/Assets/BuyCoin/rect2.png')} />
                        <Image style={{ top: -270, alignItems: 'center', left: 65, height: 15, width: 250, }} source={require('../../src/Assets/BuyCoin/bt.png')} />
                        <Image style={{ top: -265, alignItems: 'center', left: 60, height: 35, width: 265, }} source={require('../../src/Assets/BuyCoin/lb.png')} />
                        <Image style={{ top: -303, alignItems: 'center', left: 63, height: 40, width: 20, }} source={require('../../src/Assets/BuyCoin/sr.png')} />
                        <Image style={{ top: -328, alignItems: 'center', left: 70, height: 10, width: 9, }} source={require('../../src/Assets/BuyCoin/mega.png')} />
                        <Image style={{ top: -343, alignItems: 'center', left: 90, height: 20, width: 220, }} source={require('../../src/Assets/BuyCoin/ico.png')} />
                        <Image style={{ top: -325, alignItems: 'center', width: 300, left: 50 }} source={require('../../src/Assets/line.png')} />
                        <Image style={{ top: -315, alignItems: 'center', left: 65, height: 10, width: 80, }} source={require('../../src/Assets/BuyCoin/amt.png')} />
                        <Image style={{ top: -323, alignItems: 'center', left: 150, height: 5, width: 60, }} source={require('../../src/Assets/BuyCoin/bonus.png')} />
                        <TouchableOpacity>
                            <Image style={{ top: -310, alignItems: 'center', left: 75, height: 7, width: 60, }} source={require('../../src/Assets/BuyCoin/yamt.png')} />
                        </TouchableOpacity>
                        <Image style={{ top: -300, alignItems: 'center', width: 300, left: 50 }} source={require('../../src/Assets/line.png')} />
                        <Image style={{ top: -295, alignItems: 'center', left: 65, height: 8, width: 160, }} source={require('../../src/Assets/BuyCoin/66.png')} />
                    </View>
                    <View style={{ justifyContent: "center", }}>
                        <Image style={{ top: -245, alignItems: 'center', left: 25, height: 250, width: 350, }} source={require('../../src/Assets/BuyCoin/rect3.png')} />
                    </View>
                    <View style={{ justifyContent: "center", top: -40 }}>
                        <Image style={{ top: -430, alignItems: 'center', left: 65, height: 15, width: 110, }} source={require('../../src/Assets/BuyCoin/p.png')} />
                        <TouchableOpacity>
                            <Image style={{ top: -420, alignItems: 'center', left: 65, height: 17, width: 16, }} source={require('../../src/Assets/BuyCoin/b.png')} />
                        </TouchableOpacity>

                        <Image style={{ top: -433, alignItems: 'center', left: 87, height: 10, width: 65, }} source={require('../../src/Assets/BuyCoin/cp.png')} />

                        <TouchableOpacity style={{ left: 95, top: -28 }}>
                            <Image style={{ top: -420, alignItems: 'center', left: 65, height: 17, width: 16, }} source={require('../../src/Assets/BuyCoin/b.png')} />
                            <Image style={{ top: -435, alignItems: 'center', left: 67, height: 12, width: 12, }} source={require('../../src/Assets/BuyCoin/linear.png')} />

                        </TouchableOpacity>
                        <Image style={{ top: -473, alignItems: 'center', left: 180, height: 10, width: 65, }} source={require('../../src/Assets/BuyCoin/dep.png')} />
                        <View style={{ left: 190, top: -67 }}>
                            <TouchableOpacity>
                                <Image style={{ top: -420, alignItems: 'center', left: 65, height: 17, width: 16, }} source={require('../../src/Assets/BuyCoin/b.png')} />
                            </TouchableOpacity>
                            <Image style={{ top: -433, alignItems: 'center', left: 87, height: 10, width: 55, }} source={require('../../src/Assets/BuyCoin/cred.png')} />
                        </View>
                        <Image style={{ top: -480, alignItems: 'center', width: 300, left: 50 }} source={require('../../src/Assets/line.png')} />

                    </View>
                </ScrollView>

                <View style={{ justifyContent: "center", top: -210, left: 10 }}>
                    <Image style={{}} source={require('../../src/Assets/rectangle5.png')} />
                    <TouchableOpacity>
                        <Image style={{ top: -45, left: 30 }} source={require('../../src/Assets/1.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={{ top: -85, left: 90 }} source={require('../../src/Assets/2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate(BuyCoin)}>
                        <Image style={{ top: -170, left: 150 }} source={require('../../src/Assets/3.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={{ top: -205, left: 250 }} source={require('../../src/Assets/4.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={{ top: -242, left: 310 }} source={require('../../src/Assets/5.png')} />
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -8,
        padding: 8,
    },
    addWallet: {
        width: 190,
        alignItems: "center",
        height: 75,
        left: 100
    },
    rectangle1: {
        width: 400,
        alignItems: "center",
        height: 50,
    },
    rectangle2: {
        marginTop: 15,
        width: 370,
        alignItems: "center",
        height: 45,
        left: 12,
    },
    bitcoin: {
        top: -35,
        width: 20,
        alignItems: "center",
        height: 20,
        left: 40
    },

    BTC: {
        top: -50,
        width: 25,
        alignItems: "center",
        height: 10,
        left: 80,
    },

    rectangle3: {
        top: -35,
        width: 370,
        alignItems: "center",
        height: 45,
        left: 12,

    },

    ethereum: {
        top: -70,
        width: 20,
        alignItems: "center",
        height: 20,
        left: 40
    },

    ETH: {
        top: -85,
        width: 24,
        alignItems: "center",
        height: 10,
        left: 80
    },

    rectangle4: {
        top: -75,
        width: 370,
        alignItems: "center",
        height: 45,
        left: 12,

    },
    hdl1: {
        top: -110,
        width: 20,
        alignItems: "center",
        height: 20,
        left: 40
    },

    HDL: {
        top: -125,
        width: 24,
        alignItems: "center",
        height: 10,
        left: 80
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    // modalView: {
    //     margin: 20,
    //     backgroundColor: "white",
    //     // backgroundColor: "#161729",
    //     height: 500,
    //     width: 350,
    //     borderRadius: 20,
    //     padding: 35,
    //     alignItems: "center",
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 4,
    //     elevation: 5
    // },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },

    loginButton2: {
        top: -290,
        position: 'absolute',
        width: 200,
        alignItems: "center",
        height: 75,
        left: 110
    },
});
