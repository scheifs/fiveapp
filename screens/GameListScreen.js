import { View, Text, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TabBar from '../components/tab-bar';

function GameListScreen() {

    return (
        <LinearGradient colors={['#4c669f', 'purple']} style={styles.linearGradient}>
            <View style={styles.gameListContainer}>
                <Text>game list screen</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="New Game" />
            </View>
            <View>
                <TabBar />
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