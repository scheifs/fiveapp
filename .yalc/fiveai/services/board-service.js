const directions = {
    LEFT: 'left',
    RIGHT: 'right',
    UP: 'up',
    DOWN: 'down',
    UPandLEFT: 'up-left',
    UPandRIGHT: 'up-right',
    DOWNandLEFT: 'down-left',
    DOWNandRIGHT: 'down-right'
}

function getAllPossibleMoves(game, playerId) {

    let allPossibleMoves = [];

    let myCards = getMyCards(game, playerId);

    game.board.map(rowOfSquares => {
        rowOfSquares.map(square => {
            // console.log(square);
            if (!square.color) {
                const cardToPlay = getHighestCardForBoardSpot(myCards, square.num);
                if (cardToPlay) {
                    allPossibleMoves.push({ card: cardToPlay, boardNumber: square.num})
                }
            }
        })
    });

    return allPossibleMoves;

}

function getMyCards(game, playerId) {
    
    let myCards;

    game.players.map(player => {
        if (player.playerId === playerId) {
            myCards = player.cards;
        }
    });

    return myCards;

}

function getHighestCardForBoardSpot(cards, boardNumber) {

    let cardToUse = null;
    
    let sortedCards = cards.sort();

    sortedCards.map(card => {
        if (card <= boardNumber) {
            cardToUse = card;
        }
    });

    return cardToUse;    
    
}

function isSameColor5Direction(board, x, y, direction) {

    const square = board[x][y];
    if (!square.color) {
        return false;
    }

    try {
        switch (direction) {
            case directions.RIGHT: {
                return areAllSquaresSameColor(square.color,[board[x][y],board[x+1][y],board[x+2][y],board[x+3][y],board[x+4][y]])
            }
            case directions.LEFT: {
                return areAllSquaresSameColor(square.color,[board[x][y],board[x-1][y],board[x-2][y],board[x-3][y],board[x-4][y]])
            }
            case directions.UP: {
                return areAllSquaresSameColor(square.color,[board[x][y],board[x][y-1],board[x][y-2],board[x][y-3],board[x][y-4]])
            }
            case directions.DOWN: {
                return areAllSquaresSameColor(square.color,[board[x][y],board[x][y+1],board[x][y+2],board[x][y+3],board[x][y+4]])
            }
            case directions.UPandLEFT: {
                return areAllSquaresSameColor(square.color,[board[x][y],board[x-1][y-1],board[x-2][y-2],board[x-3][y-3],board[x-4][y-4]])
            }
            case directions.UPandRIGHT: {
                return areAllSquaresSameColor(square.color,[board[x][y],board[x+1][y-1],board[x+2][y-2],board[x+3][y-3],board[x+4][y-4]])
            }
            case directions.DOWNandLEFT: {
                return areAllSquaresSameColor(square.color,[board[x][y],board[x-1][y+1],board[x-2][y+2],board[x-3][y+3],board[x-4][y+4]])
            }
            case directions.DOWNandRIGHT: {
                return areAllSquaresSameColor(square.color,[board[x][y],board[x+1][y+1],board[x+2][y+2],board[x+3][y+3],board[x+4][y+4]])
            }
            
        }
    } catch(err) { // array out of bounds
        return false;
    }
        

}

function areAllSquaresSameColor(color, squares) {

    const coloredSquares = squares.filter((square) => {
        return square.color === color;
    })  
    return squares.length === coloredSquares.length;
}

export { getMyCards, getHighestCardForBoardSpot, getAllPossibleMoves }