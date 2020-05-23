import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Alert, ScrollView, FlatList } from 'react-native'

import NumberContainer from '../components/NumberContainer'
import CardView from '../components/CardView'
import Button from '../components/Button'
import DefaultStyles from '../constants/default-styles'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    return rndNum === exclude ? generateRandomBetween(min, max, exclude) : rndNum
}

const GameScreen = ({ userChoice, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userChoice)
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()])
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length)
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
            currentLow.current = currentGuess + 1

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses])
    }

    const renderListItem = (listLength, itemData) => {
        return  <View style={styles.listItem}>
                    <BodyText>#{listLength - itemData.index}{' - '}</BodyText>
                    <TitleText style={styles.listItemGuess}>{itemData.item}</TitleText>
                </View>
    }

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.titleTex}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <CardView style={styles.buttonContainer}>
                <Button iconName='md-remove' onPress={() => nextGuessHandler('lower')} />
                <Button iconName='md-add' onPress={() => nextGuessHandler('grater')} />
            </CardView>
            <View style={styles.listContainer}>
                {/*<ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
    </ScrollView>*/}
                <FlatList 
                    keyExtractor={(item) => item}
                    data={pastGuesses} 
                    renderItem={renderListItem.bind(this, pastGuesses.length)}
                    contentContainerStyle={styles.list}    
                />
            </View>
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
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    listContainer:{
        flex: 1,
        width: '60%',  
    },
    list: {
        flexGrow:1,
        justifyContent: 'flex-end',
    }
})
