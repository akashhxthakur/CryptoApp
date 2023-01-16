import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput, CheckBox, Button, Pressable, Modal } from 'react-native'
import FrontPage from './FrontPage';
import { useNavigation } from '@react-navigation/native'
import Profile from './Profile';
import BuyCoin from '../Components/BuyCoin';
export default function Wallet() {
    // const [active , setactive] = useState(false);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#161729', }}>

                <View style={styles.head}>
                    <TouchableOpacity onPress={() => setModal2Visible(!modal2Visible)}>
                        <Image source={require('../../src/Assets/dashboard.png')} style={{ height: 20, width: 20, color: '#02A3F7' }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', left: 10 }}>iHODL Wallet</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate(FrontPage)}>
                            <Image style={{ height: 21, width: 20, right: 10 }} source={require('../../src/Assets/off.png')} />

                        </TouchableOpacity><TouchableOpacity>
                            <Image style={{ height: 21, width: 20 }} source={require('../../src/Assets/notification.png')} />

                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.centered1View}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modal2Visible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModal2Visible(!modal2Visible);
                    }}
                >
                    {/* <View style={styles.centeredView}> */}
                    <View >
                        <Image style source={require('../../src/Assets/Profile/Sidebar/rect.png')}></Image>
                        <View style={{ top: -1110 }}>
                            <TouchableOpacity onPress={() => setModal2Visible(!modal2Visible)}>
                                <Image style={{ left: 15, height: 20, width: 20 }} source={require('../../src/Assets/x.png')} />
                            </TouchableOpacity>
                            <Image style={{ width: 78, height: 20, left: 125, top: -20 }} source={require('../../src/Assets/Profile/Profile.png')} />

                            <TouchableOpacity onPress={() => navigation.navigate(Profile)}>
                            <Image style={{ width: "20%", height: 80, left: 125 }} source={require('../../src/Assets/Profile/person.png')} />

                            </TouchableOpacity>
                            <Image style={{ top: 10, width: 200, height: 18, left: 70 }} source={require('../../src/Assets/Profile/welcomeUser.png')} />
                            <Image style={{ top: 30, width: 250, height: 1, left: 50 }} source={require('../../src/Assets/Profile/Sidebar/--.png')} />
                            <ScrollView style={{ top: 40, height: '100%' }}>
                                <TouchableOpacity>
                                    <Image style={{ top: 10, width: 250, height: 40, left: 50 }} source={require('../../src/Assets/Profile/Sidebar/rect1.png')} />
                                    <Image style={{ top: -18, width: 16, height: 15, left: 65 }} source={require('../../src/Assets/Profile/Sidebar/dash.png')} />
                                    <Image style={{ top: -30, width: 70, height: 10, left: 110 }} source={require('../../src/Assets/Profile/Sidebar/Dashboard.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={() => navigation.navigate(BuyCoin)}>
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
                            <View style={{ top: 45 }}>
                                <Image style source={require('../../src/Assets/rect6.png')}></Image>
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                    <Image style={{ top: -495, left: 360 }} source={require('../../src/Assets/x.png')} />
                                </TouchableOpacity>

                                <Image style={{ top: -480, left: 110 }} source={require('../../src/Assets/wantToAddWallet.png')} />
                                <Image style={{ top: -440, left: 50, }} source={require('../../src/Assets/walletType.png')} />
                                <TouchableOpacity>
                                    <Image style={{ top: -430, left: 50, }} source={require('../../src/Assets/selectWalletType.png')} />
                                    <Image style={{ top: -440, left: 360, }} source={require('../../src/Assets/arrow.png')} />
                                    <Image style={{ top: -420, left: 30 }} source={require('../../src/Assets/line.png')} />
                                </TouchableOpacity>
                                <Image style={{ top: -400, left: 50, }} source={require('../../src/Assets/WalletName.png')} />

                                <TouchableOpacity>
                                    <Image style={{ top: -390, left: 50, }} source={require('../../src/Assets/name.png')} />
                                    <Image style={{ top: -400, left: 360, }} source={require('../../src/Assets/arrow.png')} />
                                    <Image style={{ top: -380, left: 30 }} source={require('../../src/Assets/line.png')} />
                                </TouchableOpacity>
                                <Image style={{ top: -360, left: 50, }} source={require('../../src/Assets/CoinType.png')} />

                                <TouchableOpacity>
                                    <Image style={{ top: -350, left: 50, }} source={require('../../src/Assets/ctype.png')} />
                                    <Image style={{ top: -360, left: 360, }} source={require('../../src/Assets/arrow.png')} />
                                    <Image style={{ top: -340, left: 30 }} source={require('../../src/Assets/line.png')} />
                                </TouchableOpacity>


                                <TouchableOpacity>
                                    <Image style={styles.loginButton2} source={require('../../src/Assets/loginButton.png')} />
                                    <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, fontWeight: 'bold', position: "absolute", top: -265 }}>Add Wallet</Text>
                                </TouchableOpacity>


                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={styles.centeredView}>
                    <Modal
                        animationType=" "
                        transparent={true}
                        visible={modal1Visible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModal1Visible(!modal1Visible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={{ top: 150 }}>
                                <Image style source={require('../../src/Assets/rect6.png')}></Image>
                                <TouchableOpacity onPress={() => setModal1Visible(!modal1Visible)}>
                                    <Image style={{ top: -495, left: 360 }} source={require('../../src/Assets/x.png')} />
                                </TouchableOpacity>

                                <Image style={{ top: -490, left: 180 }} source={require('../../src/Assets/bitcoin2.png')} />
                                <Image style={{ top: -470, left: 150 }} source={require('../../src/Assets/BTCCOINS.png')} />
                                <Image style={{ top: -450, left: 100 }} source={require('../../src/Assets/balance.png')} />
                                <Image style={{ top: -430, left: 155 }} source={require('../../src/Assets/plusMinus.png')} />
                                <View style={{
                                    flexDirection: 'row',
                                }}>
                                    <TouchableOpacity>
                                        <Image style={{ top: -400, left: 120 }} source={require('../../src/Assets/12.png')} />
                                        <Image style={{ top: -465, left: 153 }} source={require('../../src/Assets/sendd.png')} />
                                        <Image style={{ top: -455, left: 153 }} source={require('../../src/Assets/senddd.png')} />



                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image style={{ top: -400, left: 140 }} source={require('../../src/Assets/11.png')} />
                                        <Image style={{ top: -465, left: 175 }} source={require('../../src/Assets/sendd.png')} />
                                        <Image style={{ top: -455, left: 169 }} source={require('../../src/Assets/Receive.png')} />


                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    top: -20
                                }}>
                                    <TouchableOpacity>
                                        <Image style={{ top: -400, left: 120 }} source={require('../../src/Assets/12.png')} />
                                        <Image style={{ top: -460, left: 155 }} source={require('../../src/Assets/Vector.png')} />
                                        <Image style={{ top: -460, left: 155 }} source={require('../../src/Assets/Vector-1.png')} />
                                        <Image style={{ top: -453, left: 153 }} source={require('../../src/Assets/Swap.png')} />



                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image style={{ top: -400, left: 140 }} source={require('../../src/Assets/11.png')} />
                                        <Image style={{ top: -460, left: 175 }} source={require('../../src/Assets/+.png')} />
                                        <Image style={{ top: -450, left: 176 }} source={require('../../src/Assets/Buy.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={{ justifyContent: "center", marginTop: 30 }}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Image style={styles.addWallet} source={require('../../src/Assets/loginButton.png')} />
                        <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, fontWeight: 'bold', position: "absolute", top: -13 }}>Add Wallet</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={{ justifyContent: "center", marginTop: 60 }}>
                        <Image style={styles.rectangle1} source={require('../../src/Assets/rectangle1.png')} />
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: '500', position: "absolute", top: 10, left: 30 }}>Name</Text>
                        <Text style={{ color: 'white', alignSelf: 'center', fontSize: 14, fontWeight: '500', position: "absolute", top: 10, right: 100 }}>Balance</Text>
                        <TouchableOpacity onPress={() => setModal1Visible(true)}>
                            <Image style={styles.rectangle2} source={require('../../src/Assets/rectangle2.png')} />
                            <Image style={styles.bitcoin} source={require('../../src/Assets/bitcoin.png')} />
                            <Image style={styles.BTC} source={require('../../src/Assets/BTC.png')} />
                            <Image style={{ left: 240, top: -60 }} source={require('../../src/Assets/11754.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.rectangle3} source={require('../../src/Assets/rectangle3.png')} />
                            <Image style={styles.ethereum} source={require('../../src/Assets/ethereum.png')} />
                            <Image style={styles.ETH} source={require('../../src/Assets/ETH.png')} />
                            <Image style={{ left: 240, top: -95 }} source={require('../../src/Assets/1709.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.rectangle4} source={require('../../src/Assets/rectangle4.png')} />
                            <Image style={styles.hdl1} source={require('../../src/Assets/hdl1.png')} />
                            <Image style={styles.HDL} source={require('../../src/Assets/HDL.png')} />
                            <Image style={{ left: 240, top: -135 }} source={require('../../src/Assets/9989.png')} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <View style={{ justifyContent: "center", top: 240 }}>
                    <Image style={{}} source={require('../../src/Assets/rectangle5.png')} />
                    <TouchableOpacity>
                        <Image style={{ top: -45, left: 30 }} source={require('../../src/Assets/1.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={{ top: -85, left: 90 }} source={require('../../src/Assets/2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={{ top: -170, left: 150 }} source={require('../../src/Assets/3.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={{ top: -205, left: 250 }} source={require('../../src/Assets/4.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={{ top: -242, left: 320 }} source={require('../../src/Assets/5.png')} />
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
        left: 100,
        top: -40
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
    centered1View: {
        flex: 1,
        justifyContent: 'flex-start',
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
