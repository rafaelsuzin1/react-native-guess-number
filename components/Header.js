import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/colors'
import TitleText from './TitleText'

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <TitleText style={styles.headerTitle}>{title}</TitleText>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 90,
        width: '100%',
        paddingTop: 36,
        backgroundColor: Colors.colorPrimary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontFamily:'open-sans'
    }
})
