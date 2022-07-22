import * as boardService from './services/board-service';

function getMove(game, playerId) {

    const cards = boardService.getMyCards(game, playerId);
    // console.log(`AI: My Cards: ${cards}`)

    if (cards.length < 4) {
        
        return {
            playerId: playerId,
            move: 'Draw'
        }
    } else {

        const allPossibleMoves = boardService.getAllPossibleMoves(game, playerId);
        console.log(`AI: Number of possible moves: ${allPossibleMoves.length}`);
        
        const randomNumber = Math.floor(Math.random() * allPossibleMoves.length);
        console.log(`AI: Random number: ${randomNumber}`)

        const selectedMove = allPossibleMoves[randomNumber];
        console.log(`AI: Selected Move: ${JSON.stringify(selectedMove)}`);
                
        return {
            playerId: playerId,
            move: 'Play',
            card: selectedMove.card,
            boardNumber: selectedMove.boardNumber
        }
    }

}

export { getMove };