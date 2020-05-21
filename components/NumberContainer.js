import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'
import Button from './Button'

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.colorAccent,
        borderRadius: 10,
        padding:10,
        marginVertical:10,
        justifyContent: 'center',
        alignItems:'center'
    },
    number: {
        color: colors.colorAccent,
        fontSize: 22
    }
})
