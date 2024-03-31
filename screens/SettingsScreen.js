import { View, Text, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as storageService from '../services/storage-service';
import { useEffect, useState } from 'react';

function SettingsScreen() {

    useEffect(() => {

        async function getData() {

            const games = await storageService.get('games');
            console.log(`Current Games: ${games}`);

            const user = await storageService.get('user');
            console.log(`User: ${user}`);
            if (user) {
                const prettyUser = JSON.stringify(JSON.parse(user), null, 4);
                console.log(prettyUser);
            }

        }
        getData();
    })

    async function resetButtonHandler() {
        await storageService.removeItem('games');
        await storageService.removeItem('user');
        console.log(`Games and Users reset`);
    }

    async function getDataButtonHandler() {
        const games = await storageService.get('games');
        const user = await storageService.get('user');
        console.log(`Games: ${games} User: ${user}`)
    }

    return (
        <LinearGradient colors={['#4c669f', 'purple']} style={styles.linearGradient}>

            <Button title="Reset" onPress={resetButtonHandler} />
            <Button title="GetData" onPress={getDataButtonHandler} />

        </LinearGradient>
    )

}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingTop: 20
    },

});

export default SettingsScreen;