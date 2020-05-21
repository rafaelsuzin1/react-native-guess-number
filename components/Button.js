import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'

const Button = ({onPress, buttonStyle, buttonTextStyle, title , allCaps}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={{...styles.button, ...buttonStyle, ...buttonTextStyle}}>
                <Text style={styles.buttonText}>{allCaps ? title.toUpperCase() : title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 5,
        borderRadius: 10,
        alignItems: 'center'
    },
    button: {
        margin: 5,
        backgroundColor: Colors.colorPrimary,
        paddingVertical:10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
    }

})
