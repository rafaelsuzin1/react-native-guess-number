import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CardView = ({style, children}) => {
    return (
        <View style={{ ...styles.cardContainer, ...style }}>{children}</View>
    )
}

export default CardView

const styles = StyleSheet.create({
    cardContainer: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 10,
        borderRadius: 10
    }
})
