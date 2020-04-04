const { getPiece } = require('./Board')

const letterToNumberMapping = {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8}
const numberToLetterMapping = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H'}

function getMoves(piece, distance, directions, board) {
  let moves = []
  for (let i = 0; i < directions.length; i++) {
    moves = moves.concat(getMovesByDirection(piece, distance, directions[i], board))
  }
  return moves
}

function getMovesByDirection(piece, distance, direction, board) {
  let avaiableMoves = []

  for (let i = 1; i <= distance; i++) {
    let newX = piece.x 
    let newY = piece.y
    switch (direction) {
      case 'north':
        newY = piece.y+i;
        break;
      case 'south':
        newY = piece.y-i;
        break;
      case 'west':
        newX = getNewXPostionFromLetter(piece.x, -i);
        break;
      case 'east':
        newX = getNewXPostionFromLetter(piece.x, i);
        break;
      case 'northEast':
        newY = piece.y+i; newX = getNewXPostionFromLetter(piece.x, i);
        break;
      case 'southEast':
        newY = piece.y-i; newX = getNewXPostionFromLetter(piece.x, i);
        break;
      case 'northWest':
        newY = piece.y+i; newX = getNewXPostionFromLetter(piece.x, -i);
        break;
      case 'southWest':
        newY = piece.y-i; newX = getNewXPostionFromLetter(piece.x, -i);
        break;
      default:
        throw new Error('No direction passed to axis move selector')
    }
    
    existingPiece = getPiece(board, newX, newY)
    if (isWithinBoardParameter(newX, newY)) {
      
        if (!existingPiece) {
          avaiableMoves.push([newX, newY])
        } else {
            existingPiece.colour !== piece.colour ? avaiableMoves.push([newX, newY]) : null
            break
        }
    }
  }
  return avaiableMoves
}

function getNewXPostionFromLetter(x, distance) {
  let nexXPosition = numberToLetterMapping[letterToNumberMapping[x] + distance]
  return nexXPosition ? nexXPosition : 'X'
}

function isWithinBoardParameter(x, y) {
  let xAsNum = letterToNumberMapping[x]
  return ((xAsNum > 0 && y > 0) && (xAsNum < 9 && y < 9)) ? true: false
}

module.exports = {
  getNewXPostionFromLetter,
  getMoves,
  isWithinBoardParameter
}
