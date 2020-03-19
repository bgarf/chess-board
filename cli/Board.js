const inquirer = require('inquirer');
const chalk = require('chalk');
const { getPossibleKingMoves, getPossiblePawnMoves, getPossibleKnightMoves,
   getPossibleBishopMoves, getPossibleRookMoves, getPossibleQueenMoves } = require('./Pieces')
const { getPiece, getBoardVisualistion } = require('./utils')
const { colours, pieces} = require('./enum')
const log = console.log

let x
let y
let colourToMove = colours.BLACK
let blackMoves = 1
let whiteMoves = 1

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

function getValidMoves(piece, board) {
  switch (piece.type) {
    case pieces.PAWN:
      return getPossiblePawnMoves(piece.x, piece.y, piece.colour)
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

function findAndMoveNextPiece(board) {
  let player = getPlayer()
  log(chalk.yellowBright.bold(`\n--------------------------- Player ${player[0]}: move ${player[1]} ---------------------------\n`))
  getBoardVisualistion(board)
  let playersPieces = board
                        .filter(piece => piece.colour === colourToMove)
                        .map(piece =>`${piece.type} x: ${piece.x}, y: ${piece.y}`)
  inquirer
    .prompt([
      {
        type: 'list', name: 'chosenPiece', message: '\n Which piece would you like to move? ', choices: playersPieces 
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
        log(`\nA piece doesn't exist in position ${x}${y}. Try Again!\n`)
        log(error)
      }
    )
  }
  
function chooseNextPositionAndMove(piece, board) {
  let possibleMoves = getValidMoves(piece, board).map(piece => `${piece[0]}${piece[1]}`)

  if (possibleMoves.length > 0 ) {
    selectPieceToMove(possibleMoves, piece, board)
  } else {
    log(chalk.rgb(255, 0, 8).bold(`\n ${piece.type} has no available moves. Try Again \n`))
    findAndMoveNextPiece(board)
  }
}

function selectPieceToMove(possibleMoves, piece, board) {
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
            log(chalk.rgb(255, 0, 8).bold("\n You're bound to lose if you take you're own pieces! \n Try another piece \n"))
            findAndMoveNextPiece(board)
          } 
          else {
            board = takePiece(existingPiece, board)
            movePiece(piece, board, nextPosition)
            endPlayersTurn(board)
          }
        } 
        else {
          movePiece(piece, board, nextPosition)
          endPlayersTurn(board)
        }
      }
    )
    .catch(
      error => {
        log(error)
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

function endPlayersTurn(board) {
  if (!isCheckMate(board)) {
    changePlayer()
    findAndMoveNextPiece(board)
  } else {
    log(chalk.rgb(255, 0, 230).bold(`\n-------------------- Congratulations player ${getPlayer()[0]} wins! --------------------\n`))
    resetGame()
  }
}

function resetGame() {
  inquirer
  .prompt(
    {
      type: 'confirm', name: 'reset',
      message: `Would you like to play another game? `
    }
  )
  .then(
    answers => {
      let reset = answers.reset
      reset ? runner() : log(chalk.rgb(252, 215, 3).bold('\n------------------------- Thanks for playing! --------------------------\n'))
    }
  )
  .catch(
    error => {
      log(error)
    }
  );
}

function changePlayer() {
  if (colourToMove === colours.BLACK) {
    colourToMove = colours.WHITE
    blackMoves++
  } else {
    colourToMove = colours.BLACK
    whiteMoves++
  }
}

function getPlayer() {
  return colourToMove === colours.BLACK ? [1, blackMoves] : [2, whiteMoves]
}

function isCheckMate(board) {
  return board.filter(piece => piece.type == pieces.KING).length != 2 ? true : false
}

function runner() {
  let board = initialiseBoard();
  
  findAndMoveNextPiece(board)
}

runner()

module.exports = { initialiseBoard }