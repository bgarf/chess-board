const inquirer = require('inquirer');

const {
  getPossibleKingMoves,
  getPossiblePawnMoves,
  getPossibleKnightMoves,
  getPossibleBishopMoves,
  getPossibleRookMoves,
  getPossibleQueenMoves
} = require('./Pieces')

let {colours, pieces} = require('./enum')
let x
let y
let colourToMove = colours.BLACK

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

function getPiece(board, x, y) {
  let piece = board.filter(piece => piece.x == x && piece.y == y)
  if (piece.length > 1) {
    throw new Error(`More than one piece exists in position ${x}${y}`)
  } else { 
    return piece[0]
  }
}

function getValidMoves(piece) {
  switch (piece.type) {
    case pieces.PAWN:
      return getPossiblePawnMoves(piece.x, piece.y, piece.colour)
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

function findAndMoveNextPiece(board) {
  let playersPieces = board
                        .filter(piece => piece.colour === colourToMove)
                        .map(piece =>`${piece.type} x: ${piece.x}, y: ${piece.y}`)
  inquirer
    .prompt([
      {
        type: 'list', name: 'chosenPiece', message: 'Which piece would you like to move? ', choices: playersPieces 
      }
    ])
    .then(
      answers => {
        let piecePosition = answers.chosenPiece.split(/\s\w:\s|,\s\w:\s/)
        let piece = getPiece(board, piecePosition[1], Number(piecePosition[2]))
        chooseNextPositionAndMove(piece, board)
      }
    )
    .catch(
      error => {
        console.log(`\nA piece doesn't exist in position ${x}${y}. Try Again!\n`)
        console.log(error.message)
      }
    )
  }
  
function chooseNextPositionAndMove(piece, board) {
  let possibleMoves = getValidMoves(piece).map(piece => `${piece[0]}${piece[1]}`)
  inquirer
    .prompt(
      {
        type: 'list', name: 'move',
        message: `What position would you like to move ${piece.type}: ${piece.x}${piece.y} to?`,
        choices: possibleMoves
      }
    )
    .then(
      answers => {
        let nextPosition = answers.move.split('')
        let existingPiece = getPiece(board, nextPosition[0], Number(nextPosition[1]))
        
        if (existingPiece) {
          if (existingPiece.colour === colourToMove) {
            console.log("\n You're bound to lose if you take you're own pieces! \n Try another piece \n")
            findAndMoveNextPiece(board)
          } 
          else {
            board = takePiece(existingPiece, board)
            movePiece(piece, board, nextPosition)
            playNextTurnOrFinishGame(board)
          }
        } 
        else {
          movePiece(piece, board, nextPosition)
          playNextTurnOrFinishGame(board)
        }
      }
    )
    .catch(
      error => {
        console.log(error)
      }
    );
}

function movePiece(piece, board, nextPosition) {
  let pieceIndex = board.indexOf(piece)
  board[pieceIndex].x = nextPosition[0]
  board[pieceIndex].y = Number(nextPosition[1])
}

function takePiece(existingPiece, board) {
  return board.filter(piece => piece != existingPiece)
}

function playNextTurnOrFinishGame(board) {
  if (!isCheckMate(board)) {
    colourToMove === colours.BLACK ? colourToMove = colours.WHITE : colourToMove = colours.BLACK
    findAndMoveNextPiece(board)
  } else {
    console.log('Congratulations you win!')
  }
}

function isCheckMate(board) {
  return board.filter(piece => piece.type == pieces.KING).length != 2 ? true : false
}

function runner() {
  let board = initialiseBoard();
  
  findAndMoveNextPiece(board)
}

runner()

module.exports = colours 
