import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Button,
    Platform,
    Switch,
} from 'react-native'
import bulbOff from '../assets/bulb-off.png'
import bulbOn from '../assets/bulb-on.png'

//Lấy chiều rộng và chiều cao của màn hình
import { Dimensions } from 'react-native'

const DrackLightMode = () => {
    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height
    //Lấy hệ điều hành bằng Platform
    const os = Platform.OS

    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    return (
        <SafeAreaView
            style={[styles.container, isEnabled ? styles.light : styles.drack]}
        >
            <StatusBar style={isEnabled ? 'drack' : 'light'} />
            <View style={styles.content}>
                <Image
                    source={!isEnabled ? bulbOff : bulbOn}
                    style={styles.img}
                />
                {/* <Button title={`Bật/tắt đèn ${os}`} color="#841584" /> */}
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled} 
                />
            </View>
        </SafeAreaView>
    )
}

export default DrackLightMode

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingTop: 40,
    },
    light: { backgroundColor: '#fff' },
    drack: { backgroundColor: '#000' },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        //C1
        // width: '80%',
        // height: null,
        // aspectRatio: 840 / 1449,
        // C2
        maxWidth: '60%',
        maxHeight: '60%',
        resizeMode: 'contain',
        /**
             * Đặt độ rộng và cao theo chỉ số màn hình
             *  width: windowWidth,
                height: (windowWidth * 1548) / 900,
        */
    },
})
