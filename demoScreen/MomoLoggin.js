import React, { useState } from 'react'
// Constants: get height status bar
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome5 } from '@expo/vector-icons'
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView
} from 'react-native'

export default function MomoLoggin() {
    const [text, onChangeText] = useState('')

    const handleLogin = () => {
        Alert.alert('No events !')
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <View style={styles.content}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.hiText}>Xin chào!</Text>
                        <Text style={styles.userText}>Nguyễn Văn Thịnh</Text>
                        <Text style={styles.userText}>0858733143</Text>
                    </View>
                </View>

                <View style={styles.form}>
                    <FontAwesome5
                        style={styles.icons}
                        name="lock"
                        size={24}
                        color="black"
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Enter password"
                        secureTextEntry
                        keyboardType="number-pad"
                    />
                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={handleLogin}
                    >
                        <Text style={styles.btnText}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.btnAction}>
                        <Text style={[styles.userText, styles.actionsAccount]}>
                            Quên mật khẩu ?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAction}>
                        <Text style={[styles.userText, styles.actionsAccount]}>
                            Thoát tài khoản
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const TEXT = {
    color: '#FFF',
    textAlign: 'center',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b0006d',
        // paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    hiText: {
        ...TEXT,
        fontSize: 30,
        lineHeight: 50,
        fontWeight: 'bold',
    },
    userText: {
        ...TEXT,
        fontSize: 15,
        lineHeight: 30,
        textTransform: 'uppercase',
    },
    input: {
        height: 50,
        margin: 12,
        padding: 10,
        paddingHorizontal: 60,
        backgroundColor: '#fff',
        borderRadius: 50,
        fontSize: 16,
    },
    btnLogin: {
        borderRadius: 30,
        backgroundColor: '#888888',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    icons: {
        position: 'absolute',
        top: 25,
        left: 35,
        zIndex: 10,
        fontSize: 18,
        color: '#888',
    },
    actionsAccount: {
        fontSize: 12,
    },
})
