import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

const styleFormRegister = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        height: 70,
        backgroundColor: '#008FDA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 18,
    },
    content: {
        flex: 1,
        padding: 15,
        paddingTop: 20,
        backgroundColor: '#fff',
    },

    btnLogin: {
        borderRadius: 30,
        backgroundColor: '#006FA8',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        marginBottom: 50,
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    formGroup: {
        paddingBottom: 15,
    },
    text: {
        color: '#555555',
        paddingBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    err: {
        color: '#CC0000',
        paddingTop: 10,
        fontSize: 12,
    },
})

export default styleFormRegister
