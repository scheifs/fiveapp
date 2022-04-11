import { Text, View, StyleSheet, TextInput, Button, Image, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import * as loginService from '../services/login-service';

function LoadingScreen({ updateScreen, getData }) {

    useEffect(async () => {

        const myData = getData();
        console.log(myData);
        console.log('useeffect');
        const response = await loginService.login(myData.emailAddress, myData.password);

        setTimeout(() => {
            updateScreen('Login');
        }, 1000);


    }, []);

    return (
        <View style={styles.outerContainer}>
            <LinearGradient colors={['#4c669f', 'purple']} style={styles.linearGradient}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/icon.png')} />
                </View>
                <ActivityIndicator size='large' />
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        marginVertical: 50,
        width: '100%',
        alignItems: 'center'
    },
    image: {
        width: 400,
        height: 300,
    },
    outerContainer: {
        flex: 1,
        width: '100%',
        alignContent: 'center'
    },
    linearGradient: {
        flex: 1,
    }
})

export default LoadingScreen;