import { View, Text, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Number of Players: <DropDown>

// Me/Player Color
// Computer  Color drop down

// start Game


function NewGameScreen() {

    return (
        <LinearGradient colors={['#4c669f', 'purple']} style={styles.linearGradient}>

            <View style={styles.gameContainer}>

                <Text>Num Players</Text>
                <Text>Player 1</Text>
                <Text>Player 1</Text>

            </View>

            <View>
                <Button title='Start Game' />

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