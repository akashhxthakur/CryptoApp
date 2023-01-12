import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput, CheckBox, Button, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default function BuyCoin() {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flex: 1, backgroundColor: '#161729' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                    <TouchableOpacity>
                    <LinearGradient colors={['#4DB5FE','#8349FC', ]} style={styles.linearGradient}  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        <Text style={{ color: 'white',  fontWeight: 'bold', borderRadius: 6, padding: 6, }}>Buy Coin</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: 'white', fontWeight: 'bold', padding: 6 }}>Buy Coins History</Text>

                    </TouchableOpacity>
                </View>

                <View
                            style={{
                                marginTop: 10,
                                borderBottomColor: '#403E62',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                <ScrollView>

                    <View style={{ borderWidth: 1, borderColor: '#403E62', height: '30%', margin: 10, borderRadius: 8, padding: 10, marginTop: 10 }}>
                        <Text style={{ color: "white", textAlign: "center", marginTop: 10, fontWeight: 'bold' }}>SALE ENDS IN</Text>
                        {/* <Text style={{ color: "white", textAlign: "center", marginTop: 10, fontWeight: 'bold', fontSize: 30 }}>21 : 10 : 32 : 52</Text> */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                        <Text style={{ color: "white", textAlign: "center", marginTop: 10, fontWeight: 'bold', fontSize: 28 }}>21</Text>
                        <Text style={{ color: "white", textAlign: "center", marginTop: 10, fontWeight: 'bold', fontSize: 28 }}>: 10</Text>
                        <Text style={{ color: "white", textAlign: "center", marginTop: 10, fontWeight: 'bold', fontSize: 28 }}>: 32</Text>
                        <Text style={{ color: "white", textAlign: "center", marginTop: 10, fontWeight: 'bold', fontSize: 28 }}>: 52</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>

                            <Text style={{ color: "#4FAEFD", marginTop: -15, fontSize: 11 }}>Days</Text>
                            <Text style={{ color: "#4FAEFD", marginTop: -15, fontSize: 11 }}>Hours</Text>
                            <Text style={{ color: "#4FAEFD", marginTop: -15, fontSize: 11 }}>Minutes</Text>
                            <Text style={{ color: "#4FAEFD", marginTop: -15, fontSize: 11 }}>Seconds</Text>
                        </View>
                        <View
                            style={{
                                marginTop: 10,
                                borderBottomColor: '#403E62',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                            <Text style={{ color: "white", fontWeight: 'bold' }}>Starts At</Text>
                            <Text style={{ color: "white", fontWeight: 'bold' }}>ENDS AT</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                            <Text style={{ color: "#4FAEFD", marginTop: -15, fontSize: 11 }}>2022-05-09</Text>
                            <Text style={{ color: "#4FAEFD", marginTop: -15, fontSize: 11 }}>2022-12-30</Text>
                        </View>

                    </View>

                    {/* <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
            <Text style={{color:"white"}}>Starts At</Text>
                <Text style={{color:"white"}}>ENDS AT</Text>
            </View> */}
                    <View style={{ borderWidth: 1, borderColor: '#403E62', height: '30%', margin: 10, borderRadius: 8, padding: 10 }}>
                        <Text style={{ color: "white", fontWeight: 'bold', marginTop: 12 }}>Buy Tokens Here By Card Or Crypto</Text>
                        <Text style={{ color: "white", marginTop: 5, fontSize: 13, backgroundColor: 'green', borderRadius: 5, padding: 3 }}>⚠️ New Ico Phase are available now. Now you can get some extra facility when buy coin</Text>
                        <View
                            style={{
                                marginTop: 10,
                                borderBottomColor: '#403E62',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />

                        <Text style={{ color: "white", marginTop: 10 }}>Coin Amount*</Text>
                        <TextInput style={{ color: "white", fontSize: 11 }} placeholder='Amount'></TextInput>
                        <Text style={{ color: "grey", marginTop: -10, fontSize: 10 }}>(5.0000X0 = 0.00 USD) ($0.00 = 0.00000000 BTC)</Text>
                    </View>

                    <View style={{ borderWidth: 1, borderColor: '#403E62', height: '30%', margin: 10, borderRadius: 8, padding: 10 }}>
                        <Text style={{ color: "white", fontWeight: 'bold' }}>Payment Type</Text>
                        {/* <CheckBox />
        <Text>Coin Payment</Text> */}
        <View
                            style={{
                                marginTop: 10,
                                borderBottomColor: '#403E62',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
        
                        <Text style={{ color: "grey", marginTop: 5 }}>Select Bank*</Text>
                        <TextInput style={{ color: "white" }} placeholder='Select Bank'></TextInput>
                        <Text style={{ color: "grey", marginTop: 5 }}>Attach Payment Receipt*</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                           <TouchableOpacity><Text style={{ color: 'white', borderWidth: 1,  borderColor: '#403E62', fontWeight: 'bold', borderRadius: 8, padding: 5  }}>Choose File</Text></TouchableOpacity>
                            <Text style={{ color: "white", padding: 5  }}>No File Chosen</Text>

                        </View>
                        <View
                            style={{
                                marginTop: 10,
                                borderBottomColor: '#403E62',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                        <Text style={{ color: "grey", alignSelf: 'flex-end', padding: 5, fontSize: 10 }}>File is Required</Text>

                    </View>
                    <View style={{ borderWidth: 1, borderColor: '#8349FC', margin: 10, borderRadius: 6, padding: 10 }}>
                    <LinearGradient colors={['#4DB5FE','#8349FC', ]} style={styles.linearGradient}  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        <Text style={{ color: 'white',  fontWeight: 'bold', borderRadius: 6, padding: 6, }}>Buy Coin</Text>
                        </LinearGradient>
                    </View>
                    {/* <View >

                        <TouchableOpacity>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Buy Coin</Text>

                        </TouchableOpacity>      
                                      </View> */}
                </ScrollView>

                {/* <View style={{ borderWidth: 1, borderColor: 'white', height: '30%', margin: 10, borderRadius: 6, padding: 10 }}>
                    <Text style={{ color: "white", fontWeight: 'bold' }}>Payment Type</Text>
            
                    <Text style={{ color: "grey", marginTop: 5 }}>Select Bank*</Text>
                    <TextInput style={{ color: "white" }} placeholder='Select Bank'></TextInput>
                    <Text style={{ color: "grey", marginTop: 5 }}>Attach Payment Receipt*</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                        <Text style={{ color: "white", fontWeight: 'bold' }}>Choose File</Text>
                        <Text style={{ color: "white" }}>No File Chosen</Text>
                    </View>

                </View> */}
                {/* <View style={{ borderWidth: 1, borderColor: 'white', height: '30%', margin: 10, borderRadius: 6, padding: 10 }}>
                    <Text style={{ color: "white", fontWeight: 'bold' }}>Payment Type</Text>
                    <Text style={{ color: "grey", marginTop: 5 }}>Select Bank*</Text>
                    <TextInput style={{ color: "white" }} placeholder='Select Bank'></TextInput>
                    <Text style={{ color: "grey", marginTop: 5 }}>Attach Payment Receipt*</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                        <Text style={{ color: "white", fontWeight: 'bold' }}>Choose File</Text>
                        <Text style={{ color: "white" }}>No File Chosen</Text>
                    </View>
                </View> */}
                {/* <View>
        <TouchableOpacity style={styles.btn1}>
            <Text style={styles.buyBtn}>Buy Coin</Text>
        </TouchableOpacity>

    </View> */}
                {/* <View>
        <TouchableOpacity>
            <Text style={styles.history}>Buy Coin History</Text>
        </TouchableOpacity>
    </View> */}
                {/* <View style={{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }}>
        <Text style={styles.line}>------------------------</Text>
    </View> */}
                {/* <View style={styles.sale}>
        <Text style={styles.saleEndsIn}>Sale Ends In</Text>
        <Text style={styles.count}>21 : 10 : 32 : 52</Text>
    </View> */}



            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },
    head: {
        fontFamily: 'IBM Plex Sans Thai Looped',
        fontSize: 26,
        fontStyle: 'normal',
        fontWeight: '700',
        letterSpacing: 0.001,
        textAlign: 'center',
        color: '#FFFFFF',
        position: 'absolute',
        height: 41,
        left: 149,
        top: 59,
        width: 130,
    },
    dashboard: {
        width: 25,
        height: 25
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 37.5,
        // backgroundColor:linear-gradient("90deg", "#4DB5FE" "0%", "#8349FC" "100%");
      },
    // btn1: {
    //     position: 'absolute',
    //     width: 170,
    //     height: 54,
    //     left: 38,
    //     top: 143,
    //     background: linear-gradient(90deg, #4DB5FE 0%, #8349FC 100%)
    // },
    // buyBtn: {
    //     fontFamily: 'IBM Plex Sans Thai Looped',
    //     fontStyle: 'normal',
    //     fontSize: 16,
    //     textAlign: 'center',
    //     position: 'absolute',
    //     letterSpacing: 0.001,
    //     color: '#FFFFFF',
    //     fontWeight: '600',
    //     width: 83,
    //     height: 25,
    //     left: 82,
    //     top: 157,
    // },
    // history: {
    //     fontFamily: 'IBM Plex Sans Thai Looped',
    //     fontStyle: 'normal',
    //     fontSize: 16,
    //     textAlign: 'center',
    //     position: 'absolute',
    //     letterSpacing: 0.001,
    //     color: '#FFFFFF',
    //     fontWeight: '600',
    //     width: 139,
    //     height: 25,
    //     left: 251,
    //     top: 157
    // },
    // line: {
    //     position: 'absolute',
    //     width: 354,
    //     height: 0,
    //     left: 37,
    //     top: 234,
    //     opacity: 0.1,
    //     border: '1 dashed #FFFFFF',
    //     color: '#FFFFFF',

    // },
    // sale: {
    //     boxSizing: 'border-box',
    //     position: 'absolute',
    //     width: 388,
    //     height: 342,
    //     left: 20,
    //     top: 259,
    //     // backgroundColor: linear-gradient(193.08deg, #222441 11.64%, #050506 89.1%),
    //     // border: 1px solid #403E62,
    //     // boxShadow: 0px 0px 15px rgba(46, 46, 46, 0.38),
    //     borderRadius: 8
    // },
    // saleEndsIn: {
    //     fontFamily: 'IBM Plex Sans Thai Looped',
    //     fontStyle: 'normal',
    //     fontWeight: '600',
    //     fontSize: 18,
    //     lineHeight: 30,
    //     textAlign: 'center',
    //     letterSpacing: 0.001,
    //     color: '#F8F8F8',
    //     position: 'absolute',
    //     width: 132,
    //     height: 25,
    //     left: 148,
    //     top: 188,
    // },
    // count: {
    //     fontFamily: 'IBM Plex Sans Thai Looped',
    //     fontStyle: 'normal',
    //     fontWeight: '600',
    //     fontSize: 40,
    //     lineHeight: 66,
    //     display: 'flex',
    //     textAlign: 'center',
    //     alignItems: 'center',
    //     letterSpacing: 0.001,
    //     color: '#F8F8F8',
    //     position: 'absolute',
    //     width: 336,
    //     height: 48,
    //     left: 46,
    //     top: 337,
    // },
});

