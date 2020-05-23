import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Button from '../components/Button'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'

const GameOverScreen = ({ roundsNumber, userNumber, onRestartGame }) => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game Is Over</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    resizeMode='cover'
                    source={require('../assets/success.png')}
                //source={{uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'}} 
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    You phone needed{' '}
                    <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
                rounds to guess the number{' '}
                    <Text style={styles.highlight}>{userNumber}</Text></BodyText>
            </View>
            <Button iconName='md-home' title='New Game' onPress={onRestartGame} />

        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: 200,
        borderColor: 'black',
        width: 300,
        height: 300,
        borderWidth: 3,
        overflow: 'hidden'
    },
    resultText: {
        textAlign: 'center',
        fontSize: 18
    },
    highlight: {
        color: Colors.colorPrimary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 10
    }
})
