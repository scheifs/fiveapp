import { View, Text, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameSquareButton from '../components/GameSquareButton';
import * as fiveai from 'fiveai';
import AwesomeAlert from 'react-native-awesome-alerts';
import * as gameService from '../services/game-service';
import { useRoute } from '@react-navigation/native';


function GameScreen() {

    const route = useRoute();

    console.log(`***** GAME SCREEN ******`)

    const [timestamp, setTimestamp] = useState(Date.now()) // used to redraw state
    const [game, setGame] = useState(route.params.initialGame);
    const [alertMessage, setAlertMessage] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);
    const [playerId, setPlayerId] = useState(0); // TODO: do not hardcode 0 in future

    function cardButtonHandler(card) {
        if (game.gameOver) {
            setAlertMessage(null);
            setSelectedCard(null);
        } else if (card === 'Hint') {
            const { move, card, boardNumber } = fiveai.getMove(game, playerId);
            move === 'Draw' ? setAlertMessage('Draw') : setAlertMessage(`Card ${card} to ${boardNumber}`);
            setSelectedCard(null);
        } else if (card === 'Draw') {
            if (game.players[playerId].cards.length === 4) {
                setAlertMessage("Can't draw with 4 cards")
                setTimestamp(Date.now())
                setSelectedCard(null);
            } else {
                gameService.processMove(game, {
                    playerId: playerId,
                    move: 'Draw'
                })
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
        if (selectedCard !== null) {
            gameService.processMove(game, { move: 'Play', playerId: playerId, card: selectedCard, boardNumber: boardNum });
            setGame(game);
            if (game.gameOver) {
                setAlertMessage(`Game over, ${game.winningColor} won`);
            } else {
                setAlertMessage(null);
                setSelectedCard(null);
            }
        }
    }

    // function getAlertMessage(hint) {
    //     if (hint === null) {
    //         return 'None';
    //     } else if (hint.move) {
    //         if (hint.move === 'Draw') {
    //             return 'Draw';
    //         }
    //         if (hint.move === 'Play') {
    //             return `Card ${hint.card} to ${hint.boardNumber}`
    //         }
    //     } else {
    //         return hint;
    //     }

    // }

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

    function prettyPrintCards(player) {
        return `[${player.cards.length} cards]`;
    }

    function drawPlayerInformation() {

        return (
            <View style={styles.infoPlayerContainer}>
                {game?.players.map(player => {
                    return (
                        <Text style={{ color: player.color }} key={player.playerId}>{prettyPrintCards(player)} - {player.nickname}</Text>)
                })}
            </View>)

    }

    function renderItem({ item: move }) {
        switch (move.move) {
            case 'Play': return <Text style={{ fontSize: 11 }} key={move.turnNumber}>{move.turnNumber} - {move.nickname} - {move.color} - {move.move} - {move.card} =&gt; {move.boardNumber}</Text>
            case 'Draw': return <Text style={{ fontSize: 11 }} key={move.turnNumber}>{move.turnNumber} - {move.nickname} - {move.color} - {move.move}</Text>
        }
    }

    function drawGameHistory() {
        return (

            <FlatList
                style={styles.infoGameHistoryContainer}
                data={game?.moves}
                renderItem={renderItem}
                keyExtractor={item => item.turnNumber}
                persistentScrollbar={true}
            />)

    }

    function drawBoard() {

        console.log(`redrawing board ${Date.now()}`)

        return (
            <View style={styles.boardContainer}>
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
            </View>
        )

    }

    function drawCards() {

        return (
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    {game?.players[playerId].cards.length >= 1 && <GameSquareButton height={35} onPress={cardButtonHandler} textColor="white" color="black">{game.players[playerId].cards[0]}</GameSquareButton>}
                </View>
                <View style={styles.buttonContainer}>
                    {game?.players[playerId].cards.length >= 2 && <GameSquareButton height={35} onPress={cardButtonHandler} textColor="white" color="black">{game.players[playerId].cards[1]}</GameSquareButton>}
                </View>
                <View style={styles.buttonContainer}>
                    {game?.players[playerId].cards.length >= 3 && <GameSquareButton height={35} onPress={cardButtonHandler} textColor="white" color="black">{game.players[playerId].cards[2]}</GameSquareButton>}
                </View>
                <View style={styles.buttonContainer}>
                    {game?.players[playerId].cards.length >= 4 && <GameSquareButton height={35} onPress={cardButtonHandler} textColor="white" color="black">{game.players[playerId].cards[3]}</GameSquareButton>}
                </View>
                <View style={styles.buttonContainer}>
                    <GameSquareButton height={35} onPress={cardButtonHandler} textColor="white" color="gray">Draw</GameSquareButton>
                </View>
                <View style={styles.buttonContainer}>
                    <GameSquareButton height={35} onPress={cardButtonHandler} textColor="white" color="gray">Hint</GameSquareButton>
                </View>
            </View>
        );
    }

    return (
        <LinearGradient colors={['white', 'white']} style={styles.linearGradient}>

            <AwesomeAlert
                show={alertMessage !== null}
                showProgress={false}
                message={alertMessage}
            />
            <View style={styles.infoContainer}>
                {drawPlayerInformation()}
                {drawGameHistory()}
            </View>

            {drawBoard()}
            {drawCards()}

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
    infoPlayerContainer: {

    },
    infoGameHistoryContainer: {
        paddingLeft: 16
    },
    infoContainer: {
        backgroundColor: 'white',
        paddingTop: 32,
        flexDirection: 'row',
        height: 140
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
        backgroundColor: 'white',
        paddingVertical: 4
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