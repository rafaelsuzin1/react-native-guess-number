import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BodyText = ({children, style}) => <Text style={{...styles.text, ...style}}>{children}</Text>

export default BodyText

const styles = StyleSheet.create({
   text: {
        fontFamily: 'open-sans'
   }
})
