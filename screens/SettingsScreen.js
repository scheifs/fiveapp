import { View, Text, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as storageService from '../services/storage-service';
import { useEffect, useState } from 'react';

function SettingsScreen() {

    const [user, setUser] = useState();

    useEffect(() => {
        async function getData() {
            const user = await storageService.get('user');
            setUser(() => user);
        }
        getData();
    }, [user])

    async function resetButtonHandler() {
        await storageService.removeItem('user');
        console.log(await storageService.get('user'))
    }

    return (
        <LinearGradient colors={['#4c669f', 'purple']} style={styles.linearGradient}>

         <Text>{user}</Text>
         <Button title="Reset" onPress={resetButtonHandler} />
         
        </LinearGradient>
    )

}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    
});

export default SettingsScreen;