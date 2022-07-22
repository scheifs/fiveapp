import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as storageService from '../services/storage-service';
import * as gameService from '../services/game-service';

// Number of Players: <DropDown>

// Me/Player Color
// Computer  Color drop down

// start Game


function NewGameScreen({ navigation }) {

    const initPlayers = [
        { playerId: 0, nickname: 'me', color: 'orange'}, 
        { playerId: 1, nickname: 'AI', color: 'teal'}, 
        { playerId: 2, nickname: 'AI', color: 'blue'}, 
        { playerId: 3, nickname: 'AI', color: 'orange'}, 
        { playerId: 4, nickname: 'AI', color: 'teal'},
        { playerId: 5, nickname: 'AI', color: 'blue'}
    ]

    const [user, setUser] = useState(null);
    const [players, setPlayers] = useState(initPlayers);

    useEffect(() => {
        async function getUser() {
            if (!user) {
                const userJson = await storageService.get('user');
                if (userJson) {
                    const user = JSON.parse(userJson);
                    players[0].nickname = user.nickname;
                    setPlayers(players);
                    setUser(JSON.parse(userJson));
                }
            }
        }
        getUser();
    }, [user, players])

    function startGameHandler() {
        console.log(`Start game handler with players `, players);
        const startGameOptions = {
            players: initPlayers,
        }
        const game = gameService.startGame(startGameOptions);
        console.log('----------------------------')
        console.log(game);
        console.log('----------------------------')
        navigation.navigate('Game', {
            initialGame: game
        });
    }

    return (
        <LinearGradient colors={['#4c669f', 'purple']} style={styles.linearGradient}>

            <View style={styles.gameContainer}>

                {players.map(player => {
                    return <Text key={player.playerId}>Nickname: {player.nickname} - Color: {player.color}</Text>
                })}

            </View>

            <View>
                <Button onPress={startGameHandler} title='Start Game' />

            </View>

        </LinearGradient>
    )

}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    gameContainer: {
        flex: 1
    }
});

export default NewGameScreen;