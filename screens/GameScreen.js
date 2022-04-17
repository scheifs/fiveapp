import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useLayoutEffect, useEffect } from 'react';
import GameSquareButton from '../components/GameSquareButton';

function GameScreen() {

    let board = [
        [
            { x: 0, y: 0, num: 1 },
            { x: 1, y: 0, num: 2 },
            { x: 2, y: 0, num: 3 },
            { x: 3, y: 0, num: 4 },
            { x: 4, y: 0, num: 5 },
            { x: 5, y: 0, num: 6 },
            { x: 6, y: 0, num: 7 },
            { x: 7, y: 0, num: 8 },
            { x: 8, y: 0, num: 9 },
            { x: 9, y: 0, num: 10 },
        ],
        [
            { x: 0, y: 1, num: 11 },
            { x: 1, y: 1, num: 12 },
            { x: 2, y: 1, num: 13 },
            { x: 3, y: 1, num: 14 },
            { x: 4, y: 1, num: 15 },
            { x: 5, y: 1, num: 16 },
            { x: 6, y: 1, num: 17 },
            { x: 7, y: 1, num: 18 },
            { x: 8, y: 1, num: 19 },
            { x: 9, y: 1, num: 20 },
        ],
        [
            { x: 0, y: 2, num: 21 },
            { x: 1, y: 2, num: 22 },
            { x: 2, y: 2, num: 23 },
            { x: 3, y: 2, num: 24 },
            { x: 4, y: 2, num: 25 },
            { x: 5, y: 2, num: 26 },
            { x: 6, y: 2, num: 27 },
            { x: 7, y: 2, num: 28 },
            { x: 8, y: 2, num: 29 },
            { x: 9, y: 2, num: 30 },
        ],
        [
            { x: 0, y: 3, num: 31 },
            { x: 1, y: 3, num: 32 },
            { x: 2, y: 3, num: 33 },
            { x: 3, y: 3, num: 34 },
            { x: 4, y: 3, num: 35 },
            { x: 5, y: 3, num: 36 },
            { x: 6, y: 3, num: 37 },
            { x: 7, y: 3, num: 38 },
            { x: 8, y: 3, num: 39 },
            { x: 9, y: 3, num: 40 },
        ],
        [
            { x: 0, y: 4, num: 41 },
            { x: 1, y: 4, num: 42 },
            { x: 2, y: 4, num: 43 },
            { x: 3, y: 4, num: 44 },
            { x: 4, y: 4, num: 45 },
            { x: 5, y: 4, num: 46 },
            { x: 6, y: 4, num: 47 },
            { x: 7, y: 4, num: 48 },
            { x: 8, y: 4, num: 49 },
            { x: 9, y: 4, num: 40 },
        ],
        [
            { x: 0, y: 5, num: 51 },
            { x: 1, y: 5, num: 52 },
            { x: 2, y: 5, num: 53 },
            { x: 3, y: 5, num: 54 },
            { x: 4, y: 5, num: 55 },
            { x: 5, y: 5, num: 56 },
            { x: 6, y: 5, num: 57 },
            { x: 7, y: 5, num: 58 },
            { x: 8, y: 5, num: 59 },
            { x: 9, y: 5, num: 60 },
        ],
        [
            { x: 0, y: 6, num: 61 },
            { x: 1, y: 6, num: 62 },
            { x: 2, y: 6, num: 63 },
            { x: 3, y: 6, num: 64 },
            { x: 4, y: 6, num: 65 },
            { x: 5, y: 6, num: 66 },
            { x: 6, y: 6, num: 67 },
            { x: 7, y: 6, num: 68 },
            { x: 8, y: 6, num: 69 },
            { x: 9, y: 6, num: 70 },
        ],
        [
            { x: 0, y: 7, num: 71 },
            { x: 1, y: 7, num: 72 },
            { x: 2, y: 7, num: 73 },
            { x: 3, y: 7, num: 74 },
            { x: 4, y: 7, num: 75 },
            { x: 5, y: 7, num: 76 },
            { x: 6, y: 7, num: 77 },
            { x: 7, y: 7, num: 78 },
            { x: 8, y: 7, num: 79 },
            { x: 9, y: 7, num: 80 },
        ],
        [
            { x: 0, y: 8, num: 81 },
            { x: 1, y: 8, num: 82 },
            { x: 2, y: 8, num: 83 },
            { x: 3, y: 8, num: 84 },
            { x: 4, y: 8, num: 85 },
            { x: 5, y: 8, num: 86 },
            { x: 6, y: 8, num: 87 },
            { x: 7, y: 8, num: 88 },
            { x: 8, y: 8, num: 89 },
            { x: 9, y: 8, num: 90 },
        ],
        [
            { x: 0, y: 9, num: 91 },
            { x: 1, y: 9, num: 92 },
            { x: 2, y: 9, num: 93 },
            { x: 3, y: 9, num: 94 },
            { x: 4, y: 9, num: 95 },
            { x: 5, y: 9, num: 96 },
            { x: 6, y: 9, num: 97 },
            { x: 7, y: 9, num: 98 },
            { x: 8, y: 9, num: 99 },
            { x: 9, y: 9, num: 0 },
        ],
    ];

    let cards = [23, 56, 98, 0];

    const [selectedCard, setSelectedCard] = useState(null);

    function cardButtonHandler(card) {
        console.log('you clicked ', card)
        setSelectedCard((current) => current === card ? null : card);
    }

    function boardNumberHandler(boardNum) {
        console.log('you clicked on board number ', boardNum);
    }

    function drawRow(rowNumber) {
        return board[rowNumber].map(r => {
            let color = (selectedCard === null || selectedCard > r.num) ? 'white': 'gray';
            console.log(`selectedCard ${selectedCard} Num: ${r.num} Color: ${color}`)
            return (
                <View style={{ flex: 1 }}>
                    <GameSquareButton color={color} onPress={boardNumberHandler} key={Math.random()}>{r.num}</GameSquareButton>
                </View>
            )
        })
    }

    function drawBoard() {

        return (
            <View style={{ flex: 1 }}>
                <View style={styles.boardRowContainer}>{drawRow(0)}</View>
                <View style={styles.boardRowContainer}>{drawRow(1)}</View>
                <View style={styles.boardRowContainer}>{drawRow(2)}</View>
                <View style={styles.boardRowContainer}>{drawRow(3)}</View>
                <View style={styles.boardRowContainer}>{drawRow(4)}</View>
                <View style={styles.boardRowContainer}>{drawRow(5)}</View>
                <View style={styles.boardRowContainer}>{drawRow(6)}</View>
                <View style={styles.boardRowContainer}>{drawRow(7)}</View>
                <View style={styles.boardRowContainer}>{drawRow(8)}</View>
                <View style={styles.boardRowContainer}>{drawRow(9)}</View>
            </View>
        )

    }

    return (
        <LinearGradient colors={['#4c669f', 'purple']} style={styles.linearGradient}>

            <View style={styles.infoContainer}>

                <Text>Player 1</Text>
                <Text>Player 2</Text>
                <Text>Player 3</Text>
                <Text>Player 4</Text>
                <Text>Player 5</Text>
                <Text>Player 6</Text>

            </View>

            <View style={styles.gameContainer}>
                {drawBoard()}
            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <GameSquareButton height={35} onPress={cardButtonHandler} color="#4c669f">{cards[0]}</GameSquareButton>
                </View>
                <View style={styles.buttonContainer}>
                    <GameSquareButton height={35} onPress={cardButtonHandler} color="#4c669f">{cards[1]}</GameSquareButton>
                </View>
                <View style={styles.buttonContainer}>
                    <GameSquareButton height={35}  onPress={cardButtonHandler} color="#4c669f">{cards[2]}</GameSquareButton>
                </View>
                <View style={styles.buttonContainer}>
                    <GameSquareButton height={35}  onPress={cardButtonHandler} color="#4c669f">{cards[3]}</GameSquareButton>
                </View>
                <View style={styles.buttonContainer}>
                    <GameSquareButton height={35} onPress={cardButtonHandler} color="#4c669f">Draw</GameSquareButton>
                </View>

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
    infoContainer: {
        backgroundColor: 'lightgray'
    },
    gameContainer: {
        flex: 1,
        backgroundColor: 'gray',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'stretch',
        marginHorizontal: 4,
        marginVertical: 8
    },
    buttonsContainer: {
        flexDirection: 'row',
        backgroundColor: 'lightgray',
    },
    boardRowContainer: {
        flex: 1,
        flexDirection: 'row',
    

    }
});

export default GameScreen;