const chalk = require('chalk');
const numberToLetterMapping = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H'}

function getPiece(board, x, y) {
    let piece = board.filter(piece => piece.x == x && piece.y == y)
    if (piece.length > 1) {
      throw new Error(`More than one piece exists in position ${x}${y}`)
    } else { 
      return piece[0]
    }
}

const colours = {
    WHITE: 'white',
    BLACK: 'black'
  }

const pieces = {
    PAWN: 'pawn',
    KNIGHT: 'knight',
    ROOK: 'rook',
    BISHOP: 'bishop',
    QUEEN: 'queen',
    KING: 'king'
  }

function getBoardVisualistion(board) {
    let fullBoardArray = []
    // i = y axis & j = x axis 
    for (let i = 9; i > 0 ; i--) {
        let row = '  '
        for (let j = 1; j <= 8; j++) {
            let piece = getPiece(board, numberToLetterMapping[j], i)           
            piece ? row+=(`[ ${piece.type.charAt(0)} ]`) : row+='[   ]'
        }
        fullBoardArray.push(row)
    }
    fullBoardArray.forEach(b => console.log(chalk.green.bold(b)))
}

module.exports = {
    getPiece,
    getBoardVisualistion
}