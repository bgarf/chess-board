import * as boardUtils from './Board.js'
import { getNewXPostionFromLetter, getMoves, isWithinBoardParameter } from './PositionMovement'

const axisDirections = ['north', 'south', 'east', 'west']
const diagonalDirections = ['northEast', 'southEast', 'northWest', 'southWest']

export function getPossibleKingMoves(piece, board) {
  return getMoves(piece, 1, diagonalDirections, board)
            .concat(getMoves(piece, 1, axisDirections, board))
}

export function getPossibleBishopMoves(piece, board) {
  return getMoves(piece, 8, diagonalDirections, board)
}

export function getPossibleRookMoves(piece, board) {
  return getMoves(piece, 8, axisDirections, board)
}

export function getPossibleQueenMoves(piece, board) {
  return getMoves(piece, 8, diagonalDirections, board)
            .concat(getMoves(piece, 8, axisDirections, board))
}

export function getPossiblePawnMoves(x, y, colour) {
  const colours = boardUtils.colours
  switch (colour) {
    case colours.BLACK:
      return getPawnMoves(x, y, 1, 2)
    case colours.WHITE: 
      return getPawnMoves(x, y, -1, -2)
    default:
      throw new Error('No pawn piece provided to the pawn move selector')
  } 
}

export function getPawnMoves(x, y, one, two) {
  let oneForward = y + one
  if (y == 2 || y == 7) {
    return [[x, oneForward], [x, y + two]]
  } else if (isWithinBoardParameter(x, oneForward)) {
    return [[x, oneForward]]
  } else {
    return []
  }
}

export function getPossibleKnightMoves(piece, board) {
  let allMoveCombinations = [[-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1]]

  return allMoveCombinations.map(function(coords) {
    return [getNewXPostionFromLetter(piece.x, coords[0]), piece.y + coords[1]]
  })
  .filter(
    coords => 
      isWithinBoardParameter(coords[0], coords[1]) 
      && (!boardUtils.getPiece(board, coords[0], coords[1]) || boardUtils.getPiece(board, coords[0], coords[1]).colour !== piece.colour) 
  )
}