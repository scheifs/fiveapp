import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import Login from './LoginScreen';
import * as storageService from '../services/storage-service';

function GameListScreen() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {

        async function getData() {
            
                const userJson = await storageService.get('user');
                const user = JSON.parse(userJson);
                // console.log(user);
                if (user) {
                    setIsLoggedIn(true);
                    setUser(user);
                }            
        }
        getData();

    }, [isLoggedIn]);

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
        alignItems: 'center',
        paddingTop: 20
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