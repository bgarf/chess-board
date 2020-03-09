let letterToNumberMapping = {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8}
let numberToLetterMapping = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H'}

function getHorizontalAndVerticalMoves(x, y, distance) {
  return getAxisMovesByDirection(x, y, distance, 'north')
    .concat(getAxisMovesByDirection(x, y, distance, 'south'))
    .concat(getAxisMovesByDirection(x, y, distance, 'east'))
    .concat(getAxisMovesByDirection(x, y, distance, 'west'))
}

function getDiagonalMoves(x, y, distance) {
  return getDiagonalMovesByDirection(x, y, distance, 'northEast')
  .concat(getDiagonalMovesByDirection(x, y, distance, 'southEast'))
  .concat(getDiagonalMovesByDirection(x, y, distance, 'northWest'))
  .concat(getDiagonalMovesByDirection(x, y, distance, 'southWest'))
}

function getDiagonalMovesByDirection(x, y, distance, direction, board) {
  let avaiableMoves = []
  for (let i = 1; i <= distance; i++) {
    let newX = x
    let newY = y
    switch (direction) {
      case 'northEast':
        newY = y+i; newX = getNewXPostionFromLetter(x, i);
        break;
      case 'southEast':
        newY = y-i; newX = getNewXPostionFromLetter(x, i);
        break;
      case 'northWest':
        newY = y+i; newX = getNewXPostionFromLetter(x, -i);
        break;
      case 'southWest':
        newY = y-i; newX = getNewXPostionFromLetter(x, -i);
        break;
      default:
        console.log('No direction provided');
        // TODO: should be exception!!!
        break;
    }
    if (isWithinBoardParameter(newX, newY)) {
      avaiableMoves.push([newX, newY])
    }
  }
  return avaiableMoves
}

function getAxisMovesByDirection(x, y, distance, direction) {
  let avaiableMoves = []
  for (let i = 1; i <= distance; i++) {
    let newX = x
    let newY = y
    switch (direction) {
      case 'north':
        newY = y+i;
        break;
      case 'south':
        newY = y-i;
        break;
      case 'west':
        newX = getNewXPostionFromLetter(x, -i);
        break;
      case 'east':
        newX = getNewXPostionFromLetter(x, i);
        break;
      default:
      // TODO: should be exception!!!
        break;
    }
    if (isWithinBoardParameter(newX, newY)) {
      avaiableMoves.push([newX, newY])
    }
  }
  return avaiableMoves
}

function getNewXPostionFromLetter(x, distance) {
  let nexXPosition = numberToLetterMapping[letterToNumberMapping[x] + distance]
  if (nexXPosition) {
    return nexXPosition
  } else {
    return 'X'
  }
}

function isWithinBoardParameter(x, y) {
  let xAsNum = letterToNumberMapping[x]
  if ((xAsNum > 0 && y > 0) && (xAsNum < 9 && y < 9)) {
    return true
  } else {
    return false
  }
}

module.exports = {
  getHorizontalAndVerticalMoves,
  getNewXPostionFromLetter,
  getDiagonalMoves,
  isWithinBoardParameter
}
