import { blackKing, blackQueen, blackBishop, blackKnight, blackRook, blackPawn, whiteKing, whiteQueen, whiteBishop, whiteKnight, whiteRook, whitePawn } from '../components/css/pieces.css'

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

const numberToLetterMapping = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H'}

export function initialisePieces() {
    return [
      {x: 'A', y: 1, type: pieces.ROOK, colour: colours.BLACK, style: blackRook}, 
      {x: 'B', y: 1, type: pieces.KNIGHT, colour: colours.BLACK, style: blackKnight}, 
      {x: 'C', y: 1, type: pieces.BISHOP, colour: colours.BLACK, style: blackBishop}, 
      {x: 'D', y: 1, type: pieces.QUEEN, colour: colours.BLACK, style: blackQueen}, 
      {x: 'E', y: 1, type: pieces.KING, colour: colours.BLACK, style: blackKing}, 
      {x: 'F', y: 1, type: pieces.BISHOP, colour: colours.BLACK, style: blackBishop}, 
      {x: 'G', y: 1, type: pieces.KNIGHT, colour: colours.BLACK, style: blackKnight}, 
      {x: 'H', y: 1, type: pieces.ROOK, colour: colours.BLACK, style: blackRook}, 
      {x: 'A', y: 2, type: pieces.PAWN, colour: colours.BLACK, style: blackPawn}, 
      {x: 'B', y: 2, type: pieces.PAWN, colour: colours.BLACK, style: blackPawn}, 
      {x: 'C', y: 2, type: pieces.PAWN, colour: colours.BLACK, style: blackPawn}, 
      {x: 'D', y: 2, type: pieces.PAWN, colour: colours.BLACK, style: blackPawn}, 
      {x: 'E', y: 2, type: pieces.PAWN, colour: colours.BLACK, style: blackPawn}, 
      {x: 'F', y: 2, type: pieces.PAWN, colour: colours.BLACK, style: blackPawn}, 
      {x: 'G', y: 2, type: pieces.PAWN, colour: colours.BLACK, style: blackPawn}, 
      {x: 'H', y: 2, type: pieces.PAWN, colour: colours.BLACK, style: blackPawn}, 
      {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, 
      {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},  
      {x: 'A', y: 8, type: pieces.ROOK, colour: colours.WHITE, style: whiteRook}, 
      {x: 'B', y: 8, type: pieces.KNIGHT, colour: colours.WHITE, style: whiteKnight}, 
      {x: 'C', y: 8, type: pieces.BISHOP, colour: colours.WHITE, style: whiteBishop}, 
      {x: 'D', y: 8, type: pieces.QUEEN, colour: colours.WHITE, style: whiteQueen}, 
      {x: 'E', y: 8, type: pieces.KING, colour: colours.WHITE, style: whiteKing}, 
      {x: 'F', y: 8, type: pieces.BISHOP, colour: colours.WHITE, style: whiteBishop}, 
      {x: 'G', y: 8, type: pieces.KNIGHT, colour: colours.WHITE, style: whiteKnight}, 
      {x: 'H', y: 8, type: pieces.ROOK, colour: colours.WHITE, style: whiteRook}, 
      {x: 'A', y: 7, type: pieces.PAWN, colour: colours.WHITE, style: whitePawn}, 
      {x: 'B', y: 7, type: pieces.PAWN, colour: colours.WHITE, style: whitePawn}, 
      {x: 'C', y: 7, type: pieces.PAWN, colour: colours.WHITE, style: whitePawn}, 
      {x: 'D', y: 7, type: pieces.PAWN, colour: colours.WHITE, style: whitePawn}, 
      {x: 'E', y: 7, type: pieces.PAWN, colour: colours.WHITE, style: whitePawn}, 
      {x: 'F', y: 7, type: pieces.PAWN, colour: colours.WHITE, style: whitePawn}, 
      {x: 'G', y: 7, type: pieces.PAWN, colour: colours.WHITE, style: whitePawn}, 
      {x: 'H', y: 7, type: pieces.PAWN, colour: colours.WHITE, style: whitePawn}
    ]
}

function getPiece(board, x, y) {
    let piece = board.filter(piece => piece.x == x && piece.y == y)
    if (piece.length > 1) {
      throw new Error(`More than one piece exists in position ${x}${y}`)
    } else { 
      return piece[0]
    }
}

export function getSquareArray(board) {
    let fullBoardArray = []
    // i = y axis & j = x axis 
    for (let i = 1; i <= 8 ; i++) {
        for (let j = 1; j <= 8; j++) {
            let piece = getPiece(board, numberToLetterMapping[j], i) 
            piece ? fullBoardArray.push(piece) : fullBoardArray.push('')
        }
    }
    return fullBoardArray
}
