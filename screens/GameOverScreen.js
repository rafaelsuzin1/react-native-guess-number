import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'

const GameOverScreen = ({roundsNumber, userNumber, onRestartGame}) => {
   return (
       <View style={styles.screen}>
           <Text>The Game Is Over</Text>
   <Text>Number of rounds: {roundsNumber}</Text>
   <Text>Number of User Number: {userNumber}</Text>
   <Button title='New Game' onPress={onRestartGame} />
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
