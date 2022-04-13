import { View, StyleSheet, Button } from 'react-native';

function TabBar() {

    return (
        <View style={styles.tabBarContainer}>
            <View style={styles.homeButtonContainer}>
                <Button title='Home' />
            </View>
            <View style={styles.friendsContainer}>
                <Button title='Friends' />
            </View>
            <View style={styles.settingsButtonContainer}>
                <Button title='Settings' />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    tabBarContainer: {
        backgroundColor: 'gray',
        flexDirection: 'row'
    },
    friendsContainer: {
        flex: 7,
        alignItems: 'center'
    },
    homeButtonContainer: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'orange'
    },
    settingsButtonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        backgroundColor: 'orange'
    }
});

export default TabBar;