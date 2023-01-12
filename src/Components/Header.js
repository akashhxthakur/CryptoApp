import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput, CheckBox, Button, Pressable } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View style={{ backgroundColor: '#161729' }}>

            <View style={styles.head}>
                <TouchableOpacity>
                    <Image source={require('../../src/Assets/dashboard.png')} style={{ height: 20, width: 20, color: '#02A3F7' }} />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', left: 10 }}>Buy Coin</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <TouchableOpacity>
                        <Image style={{ height: 21, width: 20 , right: 10}} source={require('../../src/Assets/off.png')} />

                    </TouchableOpacity><TouchableOpacity>
                        <Image style={{ height: 21, width: 20 }} source={require('../../src/Assets/notification.png')} />

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 8,
    },
})