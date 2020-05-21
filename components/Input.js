import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const Input = ({hint, style, ...props}) => {
    return (
        <TextInput
            {...props}
            placeholder={hint}
            style={{ ...styles.input, ...style }}
        />
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderRadius: 10,
        height: 50,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        margin: 10,
        borderColor: '#CACACA'
    }
})
