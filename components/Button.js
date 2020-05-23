import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'
import { Ionicons } from '@expo/vector-icons' 

const Button = ({onPress, buttonStyle, buttonTextStyle, title , allCaps, iconName, iconSize, iconColor}) => {
    let content

    if (iconName && iconName.length > 0)
    content = 
        <View style={styles.iconStyle}>
            <Ionicons name={iconName} size={iconSize ? iconSize: 16} color={iconColor?iconColor:'white'}/>
        </View>

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={{...styles.button, ...buttonStyle, ...buttonTextStyle}}>
                {content}
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
        borderRadius: 25,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
    },
    iconStyle: {
        marginRight: 5
    }

})
