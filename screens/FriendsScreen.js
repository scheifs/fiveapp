import { View, Text, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



function FriendsScreen() {

    return (
        <LinearGradient colors={['#4c669f', 'purple']} style={styles.linearGradient}>

         <Text>Friends</Text>
         
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

export default FriendsScreen;