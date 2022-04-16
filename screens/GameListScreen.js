import { View, Text, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useLayoutEffect, useEffect } from 'react';
import Login from './LoginScreen';
import * as storageService from '../services/storage-service';

function GameListScreen({ navigation }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        async function getData() {
            const user = await storageService.get('user');
            console.log('use effect user', user);
            if (!user) {
                setIsLoggedIn(() => false);
            }
        }
        getData();

    });

    // useLayoutEffect(() => {
    //     console.log('use effect');
    //     if (isLoggedIn) {
    //         navigation.setOptions({
    //             // tabBarStyle: {
    //             //     position: 'abolsute'
    //             // },
    //             tabBarStyle: {
    //                 display: 'flex'
    //             }
    //         });
    //     }

    // }, [isLoggedIn]);

    if (!isLoggedIn) {
        return (
            <LinearGradient colors={['#4c669f', 'purple']} style={styles.linearGradient}>
                <Login setIsLoggedIn={setIsLoggedIn} />
            </LinearGradient>
        )
    } else {

        return (
            <LinearGradient colors={['#4c669f', 'purple']} style={styles.linearGradient}>
                <View style={styles.gameListContainer}>
                    <Text>game list screen</Text>
                </View>
            </LinearGradient>
        )
    }

}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gameListContainer: {
        flex: 1
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: 'gray',
        paddingBottom: 16
    }
});

export default GameListScreen;