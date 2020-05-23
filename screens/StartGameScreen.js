import React, { useState } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableWithoutFeedback, 
    Keyboard,
    Alert } from 'react-native'
import Button from '../components/Button'
import CardView from '../components/CardView'
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import BodyText from '../components/BodyText'

const StartGameScreen = ({onStartGame}) => {

    const [enteredNumber, setEnteredNumber] = useState('')
    const [confirmed, setConfirmerd] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState(0)

    const onChangeTextHandler = text => {
        setEnteredNumber(text.replace(/[^0-9]/g, ''))
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0){
            Alert.alert(
                'Invalid Number', 
                "Number has to be a number between 1 and 99.", 
                [{text: 'Ok', style:'destructive', onPress: resetInputHandler}]
            )
            return
        }
            
        setConfirmerd(true)
        setSelectedNumber(parseInt(enteredNumber))
        setEnteredNumber('')
        Keyboard.dismiss()

    }

    const resetInputHandler = () => {
        
        setEnteredNumber('')
        setConfirmerd(false)
        setSelectedNumber(0)
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <CardView style={styles.summaryContainer}>
                <Text>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title='Start' onPress={() => onStartGame(selectedNumber)} buttonStyle={styles.buttonStartGame}/>
            </CardView>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <CardView style={styles.inputContainer}>
                    <BodyText>Select a Number</BodyText>
                    <Input
                        value={enteredNumber}
                        onChangeText={onChangeTextHandler}
                        style={styles.input}
                        hint='Enter a number'
                        blurOnSubmit
                        autoCapitalize='none'
                        keyboardType='number-pad'
                        maxLength={2}
                        autoCorrect={false}
                    />
                    <View style={styles.buttonContainer}>
                        <Button iconName='' title='Reset' buttonStyle={styles.buttonReset} onPress={resetInputHandler} />
                        <Button iconName='md-play' title='Confirm' buttonStyle={styles.buttonConfirm} onPress={confirmInputHandler} />
                    </View>
                </CardView>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        width: 300,
        maxWidth: '80%',
    },
    input: {
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },
    buttonConfirm: {
        backgroundColor: Colors.colorButtonConfirm
    },
    buttonReset: {
        backgroundColor: Colors.colorAccent
    },
    buttonStartGame: {
        backgroundColor: Colors.colorAccent
    },
    summaryContainer: {
        alignItems: 'center',
        width: '50%',
        marginTop: 10
    }
})
