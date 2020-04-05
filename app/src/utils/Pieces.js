import * as boardUtils from './Board.js'
import { getNewXPostionFromLetter, getMoves, isWithinBoardParameter, getMovesByDirection } from './PositionMovement'

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

export function getPossiblePawnMoves(piece, board) {
    return getPawnStandardMoves(piece, board).concat(getPawnDiagonalTakeMoves(piece, board))
}
      
function getPawnStandardMoves(piece, board) {
  const colourStarter = piece.colour === boardUtils.colours.BLACK ? ['north', 2] : ['south', 7]
  const standardMoves = piece.y == colourStarter[1] ? getMovesByDirection(piece, 2, colourStarter[0], board) : getMovesByDirection(piece, 1, colourStarter[0], board)
  return standardMoves.filter(coords => 
    isWithinBoardParameter(coords[0], coords[1]) && (!boardUtils.getPiece(board, coords[0], coords[1]).type))
}

function getPawnDiagonalTakeMoves(piece, board) {
  const directions = piece.colour === boardUtils.colours.BLACK ? ['northEast', 'northWest'] : ['southEast', 'southWest']
  return getMoves(piece, 1, directions, board)
            .filter(
                coords => 
                    isWithinBoardParameter(coords[0], coords[1])
                    && boardUtils.getPiece(board, coords[0], coords[1]).type
                    && boardUtils.getPiece(board, coords[0], coords[1]).colour !== piece.colour
            )
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