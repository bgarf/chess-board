const inquirer = require('inquirer');

const {
  getPossibleKingMoves,
  getPossiblePawnMoves,
  getPossibleKnightMoves,
  getPossibleBishopMoves,
  getPossibleRookMoves,
  getPossibleQueenMoves
} = require('./Pieces')

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

function getPiece(board, x, y) {
  let piece = board.filter(piece => piece.x == x && piece.y == y)
  return piece.length == 1 ? piece[0] : null //TODO: More than one piece
}

function getValidMoves(piece, board) {
  switch (piece.type) {
    case pieces.PAWN:
      console.log(piece.type)
      console.log(piece.x)
      console.log(piece.y)
      return getPossiblePawnMoves(piece.x, piece.y)
    case pieces.KNIGHT:
      return getPossibleKnightMoves(piece.x, piece.y)
    case pieces.BISHOP:
      return getPossibleBishopMoves(piece.x, piece.y)
    case pieces.ROOK:
      return getPossibleRookMoves(piece.x, piece.y)
    case pieces.QUEEN:
      return getPossibleQueenMoves(piece.x, piece.y)
    case pieces.KING:
      return getPossibleKingMoves(piece.x, piece.y)
  }
}

function initialiseBoard() {
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

function runner() {
  var board = initialiseBoard();
  // board.filter(piece => piece.colour == colours.WHITE && piece.type == piece.PAWN).map(piece => { x: piece.x, y: piece.y })

  console.log(board)
  let x 
  let y 
  
  inquirer
    .prompt([
    {type: 'input', name: 'x', message: 'X position'},
    {type: 'input', name: 'y', message: 'Y position'}
    ])
    .then(answers => {
      let x = answers.x.toUpperCase()
      let y = answers.y
      console.log('You chose the position ' + x + y);
      let piece = getPiece(board, x, y)
      console.log('Piece at that position: ' + piece.type)
      let possibleMoves = getValidMoves(piece, board)
      possibleMoves.forEach(move => console.log(move))
      inquirer
      .prompt(
        {type: 'input', name: '2', message: 'second prompt'}
      )
      .then(
        answers => {
          console.log('second layer')
        }
      )
    })
    .catch(error => {
      if(error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
      } else {
          // Something else when wrong
      }
  });  
}

runner()

