import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useState } from 'react'

function GameSquareButton(props) {

    function onPressHandler() {
        props.onPress(props.children);
    }

    return (
        <Pressable style={[styles.pressableContainer, { height: props.height || '100%' }]} onPress={onPressHandler}>
            <View style={[styles.container, { backgroundColor: props.color || 'white'}]}>
                <Text style={styles.textContainer}>{props.children}</Text>
            </View>
        </Pressable>
    );

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    pressableContainer: {
        height: '100%'
    },
    textContainer: {
        fontSize: 22
    }
});

export default GameSquareButton;