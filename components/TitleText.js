import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TitleText = ({children, style}) => <Text style={{...styles.text, ...style}}>{children}</Text>

export default TitleText

const styles = StyleSheet.create({
   text: {
        fontFamily: 'open-sans-bold',
        fontSize: 14 
   }
})
