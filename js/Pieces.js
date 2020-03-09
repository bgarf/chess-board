let {
  getVerticalMoves,
  getHorizontalMoves,
  getHorizontalAndVerticalMoves,
  getNewXPostionFromLetter,
  getDiagonalMoves,
  isWithinBoardParameter
} = require('./PositionMovement')

function getPossibleKingMoves(x, y) {
  return getDiagonalMoves(x, y, 1).concat(getHorizontalAndVerticalMoves(x, y, 1))
}

function getPossibleBishopMoves(x, y) {
  return getDiagonalMoves(x, y, 8)
}

function getPossibleRookMoves(x, y) {
  return getHorizontalAndVerticalMoves(x, y, 8)
}

function getPossibleQueenMoves(x, y) {
  return getDiagonalMoves(x, y, 8).concat(getHorizontalAndVerticalMoves(x, y, 8))
}

function getPossiblePawnMoves(x, y) {
  let oneForward = y + 1
  if (y == 2) {
    return [[x, oneForward], [x, y + 2]]
  } else if (isWithinBoardParameter(x, oneForward)) {
    return [[x, oneForward]]
  } else {
    return []
  }
}

function getPossibleKnightMoves(x, y) {
  let allMoveCombinations = [[-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1]]
  let avaiableMoves = []

  allMoveCombinations.forEach(function(combo) {
    let newX = getNewXPostionFromLetter(x, combo[0])
    let newY = y + combo[1]
    if (isWithinBoardParameter(newX, newY)) {
      avaiableMoves.push([newX, newY])
    }
  })
  return avaiableMoves
}

module.exports = {
  getPossibleKingMoves,
  getPossiblePawnMoves,
  getPossibleKnightMoves,
  getPossibleBishopMoves,
  getPossibleRookMoves,
  getPossibleQueenMoves
}
