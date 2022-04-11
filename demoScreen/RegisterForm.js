import React from 'react'
import { Formik } from 'formik'
import { StatusBar } from 'expo-status-bar'
// Constants: get height status bar
import Constants from 'expo-constants'
import SignupSchema from '../actions/ValidateForm/SignupSchema '
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity, 
    Alert,
} from 'react-native'
import FormField from '../components/FormField'
import styleFormRegister from '../assets/styleFormRegister'

const RegisterForm = () => {
    const initValues = { firstName: '', lastName: '' }

    const onSubmitHandler = values => {
        Alert.alert('Alert Title', 'Form data' + JSON.stringify(values), [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ])
    }

    const isFormValid = (isValid, touched) =>
        isValid && Object.keys(touched).length !== 0

    return (
        <>
            <StatusBar style="light" backgroundColor="#008FDA" />

            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Rigister</Text>
                </View>
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps="handled"
                    style={styles.content}
                >
                    <Formik
                        initialValues={initValues}
                        validationSchema={SignupSchema}
                        onSubmit={onSubmitHandler}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                            isValid,
                        }) => (
                            <>
                                <FormField
                                    title="First Name"
                                    placeholder="Enter First Name"
                                    field="firstName"
                                    values={values}
                                    errors={errors}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                />

                                {/* <View style={styles.formGroup}>
                                <Text style={styles.text}>First Name</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter First Name"
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    value={values.firstName}
                                />
                                {errors.firstName && touched.firstName ? (
                                    <Text style={styles.err}>
                                        {errors.firstName}
                                    </Text>
                                ) : null}
                            </View> */}
                                <View style={styles.formGroup}>
                                    <Text style={styles.text}>Last Name</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Last Name"
                                        onChangeText={handleChange('lastName')}
                                        onBlur={handleBlur('lastName')}
                                        value={values.lastName}
                                    />
                                    {errors.lastName && touched.lastName ? (
                                        <Text style={styles.err}>
                                            {errors.lastName}
                                        </Text>
                                    ) : null}
                                </View>
                                <View style={styles.formGroup}>
                                    <Text style={styles.text}>
                                        Email Address
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Email Address"
                                    />
                                </View>
                                <View style={styles.formGroup}>
                                    <Text style={styles.text}>Password</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Password"
                                    />
                                </View>
                                <View style={styles.formGroup}>
                                    <Text style={styles.text}>
                                        Confirm Password
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Confirm Password"
                                    />
                                </View>
                                <TouchableOpacity
                                    style={styles.btnLogin}
                                    onPress={handleSubmit}
                                    disabled={!isFormValid(isValid, touched)}
                                >
                                    <View
                                        style={{
                                            opacity: isFormValid(
                                                isValid,
                                                touched
                                            )
                                                ? 1
                                                : 0.5,
                                        }}
                                    >
                                        <Text style={styles.btnText}>
                                            SUBMIT
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </>
                        )}
                    </Formik>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </>
    )
}

export default RegisterForm

const styles =  styleFormRegister
