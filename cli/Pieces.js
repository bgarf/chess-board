let {
  getNewXPostionFromLetter,
  getHorizontalAndVerticalMoves,
  getDiagonalMoves,
  isWithinBoardParameter
} = require('./PositionMovement')

const {colours} = require('./enum')
const { getPiece } = require('./utils')

function getPossibleKingMoves(piece, board) {
  return getDiagonalMoves(piece, 1, board)
            .concat(getHorizontalAndVerticalMoves(piece, 1, board))
}

function getPossibleBishopMoves(piece, board) {
  let m = getDiagonalMoves(piece, 8, board)
  console.log(m)
  return m
}

function getPossibleRookMoves(piece, board) {
  return getHorizontalAndVerticalMoves(piece, 8, board)
}

function getPossibleQueenMoves(piece, board) {
  return getDiagonalMoves(piece, 8, board)
            .concat(getHorizontalAndVerticalMoves(piece, 8, board))
}

function getPossiblePawnMoves(x, y, colour) {
  switch (colour) {
    case colours.BLACK:
      return getPawnMoves(x, y, 1, 2)
    case colours.WHITE: 
      return getPawnMoves(x, y, -1, -2)
    default:
      console.log('No colour provided!')
      //TODO: should be exception?
  } 
}

function getPawnMoves(x, y, one, two) {
  let oneForward = y + one
  console.log(oneForward)
  if (y == 2 || y == 7) {
    return [[x, oneForward], [x, y + two]]
  } else if (isWithinBoardParameter(x, oneForward)) {
    return [[x, oneForward]]
  } else {
    return []
  }
}

function getPossibleKnightMoves(piece, board) {
  let allMoveCombinations = [[-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1]]

  return allMoveCombinations.map(function(coords) {
    return [getNewXPostionFromLetter(piece.x, coords[0]), piece.y + coords[1]]
  })
  .filter(
    coords => 
      isWithinBoardParameter(coords[0], coords[1]) 
      && (!getPiece(board, coords[0], coords[1]) || getPiece(board, coords[0], coords[1]).colour !== piece.colour) 
  )
}

module.exports = {
  getPossibleKingMoves,
  getPossiblePawnMoves,
  getPossibleKnightMoves,
  getPossibleBishopMoves,
  getPossibleRookMoves,
  getPossibleQueenMoves
}
