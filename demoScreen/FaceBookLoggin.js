import React from 'react'
import { StatusBar } from 'expo-status-bar'
import facebookBanner from '../assets/facebook-banner.jpg'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Image,
} from 'react-native'

const FaceBookLoggin = () => {
    return (
        <>
            <Image source={facebookBanner} style={styles.img} />
            <StatusBar style="light" />
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <View>
                        <View style={styles.wrapInput}>
                            <TextInput
                                style={styles.input}
                                placeholder="Số điện thoại hoặc email"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Mật khẩu"
                                secureTextEntry
                            />
                        </View>
                        <TouchableOpacity
                            style={[styles.btn, styles.btnLoggin]}
                        >
                            <Text style={styles.btnText}>Đăng nhập</Text>
                        </TouchableOpacity>
                        <View style={styles.forgot}>
                            <Text style={styles.forgotText}>Quên mật khẩu</Text>
                            <Text style={styles.forgotText}>Quay lại</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.wrapOrAction}>
                            <View style={styles.items}>
                                <Text style={styles.border}></Text>
                                <Text style={styles.textOrAction}>HOẶC</Text>
                                <Text style={styles.border}></Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={[styles.btn, styles.btnCreate]}
                        >
                            <Text style={styles.btnTextCreate}>
                                Tạo tài khoản mới
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default FaceBookLoggin

const styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingTop: 40,
        flex: 1,
    },
    wrapInput: {
        alignItems: 'center',
        marginBottom: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
    },
    img: {
        width: '100%',
        height: null,
        aspectRatio: 12900 / 9600,
    },
    input: {
        height: 45,
        margin: 5,
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#aaa',
        width: '100%',
    },
    btn: {
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    btnText: {
        color: '#E5F3FF',
    },
    btnLoggin: {
        backgroundColor: '#0077F3',
    },
    btnCreate: {
        backgroundColor: '#E5F3FF',
    },
    btnTextCreate: {
        color: '#0077F3',
    },
    wrapOrAction: {
        alignItems: 'center',
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginBottom: 10,
    },
    textOrAction: { width: 60, textAlign: 'center' },
    border: {
        flex: 1,
        width: 30,
        height: 1,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    forgotText: {
        textAlign: 'center',
        color: '#0077F3',
        fontWeight: 'bold',
        paddingBottom: 10,
    },
})
