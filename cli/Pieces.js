const { getNewXPostionFromLetter, getMoves, isWithinBoardParameter } = require('./PositionMovement')
const {colours} = require('./enum')
const { getPiece } = require('./utils')

const axisDirections = ['north', 'south', 'east', 'west']
const diagonalDirections = ['northEast', 'southEast', 'northWest', 'southWest']

function getPossibleKingMoves(piece, board) {
  return getMoves(piece, 1, diagonalDirections, board)
            .concat(getMoves(piece, 1, axisDirections, board))
}

function getPossibleBishopMoves(piece, board) {
  return getMoves(piece, 8, diagonalDirections, board)
}

function getPossibleRookMoves(piece, board) {
  return getMoves(piece, 8, axisDirections, board)
}

function getPossibleQueenMoves(piece, board) {
  return getMoves(piece, 8, diagonalDirections, board)
            .concat(getMoves(piece, 8, axisDirections, board))
}

function getPossiblePawnMoves(x, y, colour) {
  switch (colour) {
    case colours.BLACK:
      return getPawnMoves(x, y, 1, 2)
    case colours.WHITE: 
      return getPawnMoves(x, y, -1, -2)
    default:
      throw new Error('No pawn piece provided to the pawn move selector')
  } 
}

function getPawnMoves(x, y, one, two) {
  let oneForward = y + one
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
  getPossibleKingMoves, getPossiblePawnMoves, getPossibleKnightMoves,
  getPossibleBishopMoves, getPossibleRookMoves, getPossibleQueenMoves 
}
