import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GameOverScreen = ({}) => {
   return (
       <View style={styles.screen}>
           <Text>The Game's over</Text>
       </View>
   )
}

export default GameOverScreen

const styles = StyleSheet.create({
   screen: {
        justifyContent: 'center',
        flex: 1, 
        alignItems: 'center'
   }
})
