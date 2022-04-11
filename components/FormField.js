import { Text, View, TextInput } from 'react-native'
import React from 'react'
import styleFormRegister from '../assets/styleFormRegister'

const FormField = props => {
    const {
        title,
        placeholder,
        field,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
    } = props

    return (
        <View style={styles.formGroup}>
            <Text style={styles.text}>{title}</Text>

            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={handleChange(field)}
                onBlur={handleBlur(field)}
                value={values[field]}
            />

            {errors[field] && touched[field] ? (
                <Text style={styles.err}>{errors[field]}</Text>
            ) : null}
        </View>
    )
}

export default FormField

const styles = styleFormRegister
