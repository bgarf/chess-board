import { blackKing, blackQueen, blackBishop, blackKnight, blackRook, blackPawn, whiteKing, whiteQueen, whiteBishop, whiteKnight, whiteRook, whitePawn } from '../components/css/pieces.css'
import { getPossibleKingMoves, getPossibleKnightMoves, getPossibleBishopMoves, getPossibleRookMoves, getPossibleQueenMoves, getPossiblePawnMoves } from './Pieces'

export const colours = {
  WHITE: 'white',
  BLACK: 'black'
}

export const pieces = {
  PAWN: 'pawn',
  KNIGHT: 'knight',
  ROOK: 'rook',
  BISHOP: 'bishop',
  QUEEN: 'queen',
  KING: 'king'
}

export function initialisePieces() {
    return [
      {x: 'A', y: 1, type: pieces.ROOK, colour: colours.BLACK, pieceStyle: blackRook}, 
      {x: 'B', y: 1, type: pieces.KNIGHT, colour: colours.BLACK, pieceStyle: blackKnight}, 
      {x: 'C', y: 1, type: pieces.BISHOP, colour: colours.BLACK, pieceStyle: blackBishop}, 
      {x: 'D', y: 1, type: pieces.QUEEN, colour: colours.BLACK, pieceStyle: blackQueen}, 
      {x: 'E', y: 1, type: pieces.KING, colour: colours.BLACK, pieceStyle: blackKing}, 
      {x: 'F', y: 1, type: pieces.BISHOP, colour: colours.BLACK, pieceStyle: blackBishop}, 
      {x: 'G', y: 1, type: pieces.KNIGHT, colour: colours.BLACK, pieceStyle: blackKnight}, 
      {x: 'H', y: 1, type: pieces.ROOK, colour: colours.BLACK, pieceStyle: blackRook}, 
      {x: 'A', y: 2, type: pieces.PAWN, colour: colours.BLACK, pieceStyle: blackPawn}, 
      {x: 'B', y: 2, type: pieces.PAWN, colour: colours.BLACK, pieceStyle: blackPawn}, 
      {x: 'C', y: 2, type: pieces.PAWN, colour: colours.BLACK, pieceStyle: blackPawn}, 
      {x: 'D', y: 2, type: pieces.PAWN, colour: colours.BLACK, pieceStyle: blackPawn}, 
      {x: 'E', y: 2, type: pieces.PAWN, colour: colours.BLACK, pieceStyle: blackPawn}, 
      {x: 'F', y: 2, type: pieces.PAWN, colour: colours.BLACK, pieceStyle: blackPawn}, 
      {x: 'G', y: 2, type: pieces.PAWN, colour: colours.BLACK, pieceStyle: blackPawn}, 
      {x: 'H', y: 2, type: pieces.PAWN, colour: colours.BLACK, pieceStyle: blackPawn}, 
      {x: 'A', y: 3}, {x: 'B', y: 3}, {x: 'C', y: 3}, {x: 'D', y: 3}, {x: 'E', y: 3}, {x: 'F', y: 3}, {x: 'G', y: 3}, {x: 'H', y: 3}, 
      {x: 'A', y: 4}, {x: 'B', y: 4}, {x: 'C', y: 4}, {x: 'D', y: 4}, {x: 'E', y: 4}, {x: 'F', y: 4}, {x: 'G', y: 4}, {x: 'H', y: 4}, 
      {x: 'A', y: 5}, {x: 'B', y: 5}, {x: 'C', y: 5}, {x: 'D', y: 5}, {x: 'E', y: 5}, {x: 'F', y: 5}, {x: 'G', y: 5}, {x: 'H', y: 5}, 
      {x: 'A', y: 6}, {x: 'B', y: 6}, {x: 'C', y: 6}, {x: 'D', y: 6}, {x: 'E', y: 6}, {x: 'F', y: 6}, {x: 'G', y: 6}, {x: 'H', y: 6}, 
      {x: 'A', y: 7, type: pieces.PAWN, colour: colours.WHITE, pieceStyle: whitePawn}, 
      {x: 'B', y: 7, type: pieces.PAWN, colour: colours.WHITE, pieceStyle: whitePawn}, 
      {x: 'C', y: 7, type: pieces.PAWN, colour: colours.WHITE, pieceStyle: whitePawn}, 
      {x: 'D', y: 7, type: pieces.PAWN, colour: colours.WHITE, pieceStyle: whitePawn}, 
      {x: 'E', y: 7, type: pieces.PAWN, colour: colours.WHITE, pieceStyle: whitePawn}, 
      {x: 'F', y: 7, type: pieces.PAWN, colour: colours.WHITE, pieceStyle: whitePawn}, 
      {x: 'G', y: 7, type: pieces.PAWN, colour: colours.WHITE, pieceStyle: whitePawn}, 
      {x: 'H', y: 7, type: pieces.PAWN, colour: colours.WHITE, pieceStyle: whitePawn},
      {x: 'A', y: 8, type: pieces.ROOK, colour: colours.WHITE, pieceStyle: whiteRook}, 
      {x: 'B', y: 8, type: pieces.KNIGHT, colour: colours.WHITE, pieceStyle: whiteKnight}, 
      {x: 'C', y: 8, type: pieces.BISHOP, colour: colours.WHITE, pieceStyle: whiteBishop}, 
      {x: 'D', y: 8, type: pieces.QUEEN, colour: colours.WHITE, pieceStyle: whiteQueen}, 
      {x: 'E', y: 8, type: pieces.KING, colour: colours.WHITE, pieceStyle: whiteKing}, 
      {x: 'F', y: 8, type: pieces.BISHOP, colour: colours.WHITE, pieceStyle: whiteBishop}, 
      {x: 'G', y: 8, type: pieces.KNIGHT, colour: colours.WHITE, pieceStyle: whiteKnight}, 
      {x: 'H', y: 8, type: pieces.ROOK, colour: colours.WHITE, pieceStyle: whiteRook}
    ]
}

export function getValidMoves(piece, board) {
  switch (piece.type) {
    case pieces.PAWN:
      return getPossiblePawnMoves(piece, board)
    case pieces.KNIGHT:
      return getPossibleKnightMoves(piece, board)
    case pieces.BISHOP:
      return getPossibleBishopMoves(piece, board)
    case pieces.ROOK:
      return getPossibleRookMoves(piece, board)
    case pieces.QUEEN:
      return getPossibleQueenMoves(piece, board)
    case pieces.KING:
      return getPossibleKingMoves(piece, board)
  }
}

export function getPiece(board, x, y) {
    let piece = board.filter(piece => piece.x == x && piece.y == y)
    if (piece.length > 1) {
      throw new Error(`More than one piece exists in position ${x}${y}`)
    } else { 
      return piece[0]
    }
}
