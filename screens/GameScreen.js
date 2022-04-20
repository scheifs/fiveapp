import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import GameSquareButton from '../components/GameSquareButton';
import * as fiveai from 'fiveai';
import AwesomeAlert from 'react-native-awesome-alerts';
import * as gameService from '../services/game-service';


function GameScreen() {

    const [timestamp, setTimestamp] = useState(Date.now())
    const [game, setGame] = useState(null);
    const [cards, setCards] = useState(null);
    const [alertMessage, setAlertMessage] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

    if (game === null) {
        const startGameOptions = {
            players: [
                { playerId: 1, nickname: 'scheifs', color: 'blue' },
                { playerId: 2, nickname: 'AI', color: 'orange' }
            ]
        }
        const newGame = gameService.startGame(startGameOptions);
        setGame(newGame);
        const newCards = gameService.getPlayer(newGame, 1).cards;
        setCards(newCards);
        setTimestamp(Date.now());
    }

    function cardButtonHandler(card) {
        console.log(`you clicked "${card}"`)
        if (card === 'Hint') {
            const move = fiveai.getMove(game, 1);
            console.log(`AI hint ${JSON.stringify(move)}`)
            setAlertMessage(move);
            setSelectedCard(null);
        } else if (card === 'Draw') {
            if (cards.length === 4) {
                setAlertMessage("Can't draw with 4 cards")
                setTimestamp(Date.now())
                setSelectedCard(null);
            } else {
                gameService.processMove(game, {
                    playerId: 1,
                    move: 'Draw'
                })
                setCards(() => {
                    console.log(`Updated cards`, game.players[0].cards);
                    return game.players[0].cards;
                });
                setGame(game);
                setAlertMessage(null);
                setSelectedCard(null);
                setTimestamp(Date.now());
            }

        } else {
            setAlertMessage(null);
            setSelectedCard((current) => current === card ? null : card);
        }

    }

    function boardNumberHandler(boardNum) {

        console.log(`Move: Card ${selectedCard} Board Number: ${boardNum}`);
        if (selectedCard) {
            gameService.processMove(game, { move: 'Play', playerId: 1, card: selectedCard, boardNumber: boardNum });
            console.log(`game after move ${JSON.stringify(game?.board)}`);
            setGame(game);
            setCards(gameService.getPlayer(game, 1).cards);
            setAlertMessage(null);
            setSelectedCard(null);
        }

    }

    function getAlertMessage(hint) {
        if (hint === null) {
            return 'None';
        } else if (hint.move) {
            if (hint.move === 'Draw') {
                return 'Draw';
            }
            if (hint.move === 'Play') {
                return `Card ${hint.card} to ${hint.boardNumber}`
            }
        } else {
            return hint;
        }

    }

    function drawRow(rowNumber) {
        if (game === null || game.board === null) {
            return;
        }
        return game.board[rowNumber].map(r => {
            let color = r.color;
            if (!color) {
                color = (selectedCard === "Hint" || selectedCard === 'Draw' || selectedCard === null || selectedCard > r.num) ? 'lightgray' : 'white';
            }
            return (
                <View key={r.num} style={{ flex: 1 }}>
                    <GameSquareButton color={color} onPress={boardNumberHandler} key={Math.random()}>{r.num}</GameSquareButton>
                </View>
            )
        })
    }

    function prettyPrintCards(cards) {

        if (cards) {
            let myCards = '[';
            cards.forEach(card => {
                myCards = myCards + card + ', ';
            })
            myCards = myCards.substring(0,myCards.length-2) + ']';
            return myCards;
        }

    }

    function drawInformation() {

        return (
            <View style={styles.infoContainer}>
                {game?.players.map(player => {
                return (
                    <Text>{player.color} - {player.nickname} - {prettyPrintCards(player.cards)}</Text>)
                })}
            </View>)

    }

    function drawBoard() {

        console.log(`redrawing board ${Date.now()}`)

        return (
            <View style={{ flex: 1 }}>
                <View key="row0" style={styles.boardRowContainer}>{drawRow(0)}</View>
                <View key="row1" style={styles.boardRowContainer}>{drawRow(1)}</View>
                <View key="row2" style={styles.boardRowContainer}>{drawRow(2)}</View>
                <View key="row3" style={styles.boardRowContainer}>{drawRow(3)}</View>
                <View key="row4" style={styles.boardRowContainer}>{drawRow(4)}</View>
                <View key="row5" style={styles.boardRowContainer}>{drawRow(5)}</View>
                <View key="row6" style={styles.boardRowContainer}>{drawRow(6)}</View>
                <View key="row7" style={styles.boardRowContainer}>{drawRow(7)}</View>
                <View key="row8" style={styles.boardRowContainer}>{drawRow(8)}</View>
                <View key="row9" style={styles.boardRowContainer}>{drawRow(9)}</View>
            </View>
        )

    }

    return (
        <LinearGradient colors={['#4c669f', 'purple']} style={styles.linearGradient}>

            <AwesomeAlert
                show={alertMessage !== null}
                showProgress={false}
                message={getAlertMessage(alertMessage)}
            />

            {drawInformation()}

            <View style={styles.boardContainer}>
                {drawBoard()}
            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    {cards?.length >= 1 && <GameSquareButton height={35} onPress={cardButtonHandler} color="#4c669f">{cards[0]}</GameSquareButton>}
                </View>
                <View style={styles.buttonContainer}>
                    {cards?.length >= 2 && <GameSquareButton height={35} onPress={cardButtonHandler} color="#4c669f">{cards[1]}</GameSquareButton>}
                </View>
                <View style={styles.buttonContainer}>
                    {cards?.length >= 3 && <GameSquareButton height={35} onPress={cardButtonHandler} color="#4c669f">{cards[2]}</GameSquareButton>}
                </View>
                <View style={styles.buttonContainer}>
                    {cards?.length === 4 && <GameSquareButton height={35} onPress={cardButtonHandler} color="#4c669f">{cards[3]}</GameSquareButton>}
                </View>
                <View style={styles.buttonContainer}>
                    <GameSquareButton height={35} onPress={cardButtonHandler} color="#4c669f">Draw</GameSquareButton>
                </View>
                <View style={styles.buttonContainer}>
                    <GameSquareButton height={35} onPress={cardButtonHandler} color="#4c669f">Hint</GameSquareButton>
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
        backgroundColor: 'gray'
    },
    boardContainer: {
        flex: 1,
        backgroundColor: 'black',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'stretch',
        marginHorizontal: 4,
        marginVertical: 8
    },
    buttonsContainer: {
        flexDirection: 'row',
        backgroundColor: 'gray',
    },
    boardRowContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 1,
        paddingTop: 1,
    },
    boardSquareContainer: {
        flex: 1,
    }
});

export default GameScreen;