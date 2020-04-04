import React from 'react'
import Board from './Board'
const { initialisePieces, getValidMoves, getPiece } = require('../utils/Board.js')

const clicked = {
    width: "65.9px",
    height: "65.9px",
    padding: "0px",
}
const selectedPiece = "2px solid RGB(20, 199, 219)"
const avaiableMoves = "2px solid RGB(20, 199, 219)"
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: initialisePieces(),
            selected: null,
            available: []
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(piece) {
        console.log(piece)
        let board = this.state.board.slice()
        const pieceIndex = board.indexOf(piece)
        board[pieceIndex].pieceStyle =  ''
        this.setState({board: board})
        console.log(piece)
    }

    clickHandler2(piece) {
        let board = this.state.board.slice()
        if (!this.state.selected) {
            this.highlightMoves(piece, board)
        } else {
            this.unhighlightSelected(board)
            this.highlightMoves(piece, board)
        }
    }

    highlightMoves(piece, board) {
        const newPieceIndex = board.indexOf(piece)
        const moves = getValidMoves(piece, board).map((move) => getPiece(board, move[0], move[1]))
        moves
            .map((move) => board.indexOf(move))
            .forEach((index) => board[index].style = {...clicked, border: avaiableMoves})
        board[newPieceIndex].style = {...clicked, border: selectedPiece}
        this.setState({
            board: board,
            selected: piece,
            available: moves
        })
    }

    unhighlightSelected(board) {
        const currentPieceIndex = board.indexOf(this.state.selected)
        board[currentPieceIndex].style = null
        this.state.available
            .map((move) => board.indexOf(move))
            .forEach((index) => board[index].style = null)
    }

    render() {
        return (
            <Board
                boardState={this.state.board}
                onClick={(i) => this.clickHandler2(i)}
            />
        )
    }
}

export default App