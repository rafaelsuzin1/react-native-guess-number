import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'

import NumberContainer from '../components/NumberContainer'
import CardView from '../components/CardView'
import Button from '../components/Button'
import DefaultStyles from '../constants/default-styles'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    return rndNum === exclude ? generateRandomBetween(min, max, exclude) : rndNum
}

const GameScreen = ({ userChoice, onGameOver }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice))
    const [rounds, setRounds] = useState(0)

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver])


    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < userChoice) ||
            (direction === 'grater' && currentGuess > userChoice)
        ) {
            Alert.alert(
                'Don\'t lie!',
                'You know that this is wrong...',
                [{ text: 'Sorry!', style: 'cancel' }]
            )
            return
        }

        if (direction === 'lower')
            currentHigh.current = currentGuess

        if (direction === 'grater')
            currentLow.current = currentGuess

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(curRounds => curRounds +1)
    }

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.titleTex}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <CardView style={styles.buttonContainer}>
                <Button iconName='md-remove' onPress={() => nextGuessHandler('lower')} />
                <Button iconName='md-add' onPress={() => nextGuessHandler('grater')} />
            </CardView>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        width: 300,
        maxWidth: '80%'
    }
})
