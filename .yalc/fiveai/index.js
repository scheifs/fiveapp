import * as boardService from './services/board-service';

function getMove(game, player) {

    const cards = boardService.getMyCards(game, player);
    console.log(`AI: My Cards: ${cards}`)

    if (cards.length < 4) {
        
        return {
            player,
            move: 'Draw'
        }
    } else {

        const allPossibleMoves = boardService.getAllPossibleMoves(game, player);
        console.log(`AI: Number of possible moves: ${allPossibleMoves.length}`);
        
        const randomNumber = Math.floor(Math.random() * (50 - 0) + 0);
        console.log(`AI: Random number: ${randomNumber}`)

        const selectedMove = allPossibleMoves[randomNumber];
        console.log(`AI: Selected Move: ${JSON.stringify(selectedMove)}`);
                
        return {
            player: player,
            move: 'Play',
            card: selectedMove.card,
            boardNumber: selectedMove.boardNumber
        }
    }

}

export { getMove };