const __emptyBoard__ = [
    [{ num: 73, x: 0, y: 0 },
    { num: 72, x: 1, y: 0 },
    { num: 71, x: 2, y: 0 },
    { num: 70, x: 3, y: 0 },
    { num: 69, x: 4, y: 0 },
    { num: 68, x: 5, y: 0 },
    { num: 67, x: 6, y: 0 },
    { num: 66, x: 7, y: 0 },
    { num: 65, x: 8, y: 0 },
    { num: 0, x: 9, y: 0 }],
    [{ num: 74, x: 0, y: 1 },
    { num: 57, x: 1, y: 1 },
    { num: 58, x: 2, y: 1 },
    { num: 59, x: 3, y: 1 },
    { num: 60, x: 4, y: 1 },
    { num: 61, x: 5, y: 1 },
    { num: 62, x: 6, y: 1 },
    { num: 63, x: 7, y: 1 },
    { num: 64, x: 8, y: 1 },
    { num: 99, x: 9, y: 1 }],
    [{ num: 75, x: 0, y: 2 },
    { num: 56, x: 1, y: 2 },
    { num: 21, x: 2, y: 2 },
    { num: 20, x: 3, y: 2 },
    { num: 19, x: 4, y: 2 },
    { num: 18, x: 5, y: 2 },
    { num: 17, x: 6, y: 2 },
    { num: 36, x: 7, y: 2 },
    { num: 37, x: 8, y: 2 },
    { num: 98, x: 9, y: 2 }],
    [{ num: 76, x: 0, y: 3 },
    { num: 55, x: 1, y: 3 },
    { num: 22, x: 2, y: 3 },
    { num: 13, x: 3, y: 3 },
    { num: 14, x: 4, y: 3 },
    { num: 15, x: 5, y: 3 },
    { num: 16, x: 6, y: 3 },
    { num: 35, x: 7, y: 3 },
    { num: 38, x: 8, y: 3 },
    { num: 97, x: 9, y: 3 }],
    [{ num: 77, x: 0, y: 4 },
    { num: 54, x: 1, y: 4 },
    { num: 23, x: 2, y: 4 },
    { num: 12, x: 3, y: 4 },
    { num: 1, x: 4, y: 4 },
    { num: 4, x: 5, y: 4 },
    { num: 5, x: 6, y: 4 },
    { num: 34, x: 7, y: 4 },
    { num: 39, x: 8, y: 4 },
    { num: 96, x: 9, y: 4 }],
    [{ num: 78, x: 0, y: 5 },
    { num: 53, x: 1, y: 5 },
    { num: 24, x: 2, y: 5 },
    { num: 11, x: 3, y: 5 },
    { num: 2, x: 4, y: 5 },
    { num: 3, x: 5, y: 5 },
    { num: 6, x: 6, y: 5 },
    { num: 33, x: 7, y: 5 },
    { num: 40, x: 8, y: 5 },
    { num: 95, x: 9, y: 5 }],
    [{ num: 79, x: 0, y: 6 },
    { num: 52, x: 1, y: 6 },
    { num: 25, x: 2, y: 6 },
    { num: 10, x: 3, y: 6 },
    { num: 9, x: 4, y: 6 },
    { num: 8, x: 5, y: 6 },
    { num: 7, x: 6, y: 6 },
    { num: 32, x: 7, y: 6 },
    { num: 41, x: 8, y: 6 },
    { num: 94, x: 9, y: 6 }],
    [{ num: 80, x: 0, y: 7 },
    { num: 51, x: 1, y: 7 },
    { num: 26, x: 2, y: 7 },
    { num: 27, x: 3, y: 7 },
    { num: 28, x: 4, y: 7 },
    { num: 29, x: 5, y: 7 },
    { num: 30, x: 6, y: 7 },
    { num: 31, x: 7, y: 7 },
    { num: 42, x: 8, y: 7 },
    { num: 93, x: 9, y: 7 }],
    [{ num: 81, x: 0, y: 8 },
    { num: 50, x: 1, y: 8 },
    { num: 49, x: 2, y: 8 },
    { num: 48, x: 3, y: 8 },
    { num: 47, x: 4, y: 8 },
    { num: 46, x: 5, y: 8 },
    { num: 45, x: 6, y: 8 },
    { num: 44, x: 7, y: 8 },
    { num: 43, x: 8, y: 8 },
    { num: 92, x: 9, y: 8 }],
    [{ num: 82, x: 0, y: 9 },
    { num: 83, x: 1, y: 9 },
    { num: 84, x: 2, y: 9 },
    { num: 85, x: 3, y: 9 },
    { num: 86, x: 4, y: 9 },
    { num: 87, x: 5, y: 9 },
    { num: 88, x: 6, y: 9 },
    { num: 89, x: 7, y: 9 },
    { num: 90, x: 8, y: 9 },
    { num: 91, x: 9, y: 9 }]
];

function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

function getNewShuffledDeck() {

    let deck = new Array(100);
    for (let x = 0; x < 100; x++) {
        deck[x] = x;
    }
    return shuffle(deck);
}

function dealToPlayers(game) {
    game.players.forEach(player => {
        player.cards = [];
        player.cards.push(game.deck.pop());
        player.cards.push(game.deck.pop());
        player.cards.push(game.deck.pop());
        player.cards.push(game.deck.pop());
    });
}

function startGame(startGameOptions) {
    let game = {
        lastUpdated: new Date(),
        deck: getNewShuffledDeck(),
        players: startGameOptions.players,
        playersTurnId: 1,
        moves: [],
        turnNumber: 1,
        board: JSON.parse(JSON.stringify(__emptyBoard__))
    }
    dealToPlayers(game);
    return game;
}

function getPlayer(game, playerId) {
    return game.players.find(player => {
        if (player.playerId === playerId) {
            return true;
        }
    });
}

function removeCardFromPlayer(player, playedCard) {
    console.log(`Removing ${playedCard} from `, player)
    return player.cards.filter((card) => {
        if (card !== playedCard) {
            return true;
        }
    });
}

function drawCard(game, playerId) {
    const cardToDraw = game.deck.pop();
    console.log(`Card to draw: ${cardToDraw}`)
    console.log(game.players[0])
    game.players[0].cards.push(cardToDraw);
    return cardToDraw;
}

// {
//     player: playerId,
//     move: "Draw"
// }

// {
//     player: playerId,
//     move: "Play",
//     card: movePayload.card,
//     boardNumber: movePayload.boardNumber
// })

function processMove(game, { playerId, move, card, boardNumber }) {

    if (move === 'Play') {

        const player = getPlayer(game, playerId);
        const color = player.color;
        updateBoard(game, boardNumber, color);
        const updatedPlayedCards = removeCardFromPlayer(player, card);
        game.players[0].cards = updatedPlayedCards;
        return game;

    } else if (move === 'Draw') {

        return drawCard(game, 1);
        
    }

}

function updateBoard(game, boardNum, color) {

    game.board.map(row => {
        row.map((square) => {
            if (square.num === boardNum) {
                square.color = color;
            }
        })
    })

}

export { startGame, getPlayer, processMove }