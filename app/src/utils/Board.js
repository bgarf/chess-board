export function initialiseBoard() {
    return [
      {x: 'A', y: 1, type: pieces.ROOK, colour: colours.BLACK}, 
      {x: 'B', y: 1, type: pieces.KNIGHT, colour: colours.BLACK}, 
      {x: 'C', y: 1, type: pieces.BISHOP, colour: colours.BLACK}, 
      {x: 'D', y: 1, type: pieces.QUEEN, colour: colours.BLACK}, 
      {x: 'E', y: 1, type: pieces.KING, colour: colours.BLACK}, 
      {x: 'F', y: 1, type: pieces.BISHOP, colour: colours.BLACK}, 
      {x: 'G', y: 1, type: pieces.KNIGHT, colour: colours.BLACK}, 
      {x: 'H', y: 1, type: pieces.ROOK, colour: colours.BLACK}, 
      {x: 'A', y: 2, type: pieces.PAWN, colour: colours.BLACK}, 
      {x: 'B', y: 2, type: pieces.PAWN, colour: colours.BLACK}, 
      {x: 'C', y: 2, type: pieces.PAWN, colour: colours.BLACK}, 
      {x: 'D', y: 2, type: pieces.PAWN, colour: colours.BLACK}, 
      {x: 'E', y: 2, type: pieces.PAWN, colour: colours.BLACK}, 
      {x: 'F', y: 2, type: pieces.PAWN, colour: colours.BLACK}, 
      {x: 'G', y: 2, type: pieces.PAWN, colour: colours.BLACK}, 
      {x: 'H', y: 2, type: pieces.PAWN, colour: colours.BLACK}, 
      {x: 'A', y: 8, type: pieces.ROOK, colour: colours.WHITE}, 
      {x: 'B', y: 8, type: pieces.KNIGHT, colour: colours.WHITE}, 
      {x: 'C', y: 8, type: pieces.BISHOP, colour: colours.WHITE}, 
      {x: 'D', y: 8, type: pieces.QUEEN, colour: colours.WHITE}, 
      {x: 'E', y: 8, type: pieces.KING, colour: colours.WHITE}, 
      {x: 'F', y: 8, type: pieces.BISHOP, colour: colours.WHITE}, 
      {x: 'G', y: 8, type: pieces.KNIGHT, colour: colours.WHITE}, 
      {x: 'H', y: 8, type: pieces.ROOK, colour: colours.WHITE}, 
      {x: 'A', y: 7, type: pieces.PAWN, colour: colours.WHITE}, 
      {x: 'B', y: 7, type: pieces.PAWN, colour: colours.WHITE}, 
      {x: 'C', y: 7, type: pieces.PAWN, colour: colours.WHITE}, 
      {x: 'D', y: 7, type: pieces.PAWN, colour: colours.WHITE}, 
      {x: 'E', y: 7, type: pieces.PAWN, colour: colours.WHITE}, 
      {x: 'F', y: 7, type: pieces.PAWN, colour: colours.WHITE}, 
      {x: 'G', y: 7, type: pieces.PAWN, colour: colours.WHITE}, 
      {x: 'H', y: 7, type: pieces.PAWN, colour: colours.WHITE}
    ]
}

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