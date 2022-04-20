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

export { getMyCards, getHighestCardForBoardSpot, getAllPossibleMoves }