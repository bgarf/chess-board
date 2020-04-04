import React from 'react'
import Board from './Board'
const { initialisePieces, getValidMoves, getPiece } = require('../utils/Board.js')

const selected = {
    border: '0.1px solid rgb(255, 0, 234)'
}
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: initialisePieces(),
            selected: null,
            available: [],
            message: ''
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.highlightMoves = this.highlightMoves.bind(this)
        this.unhighlightSelected = this.unhighlightSelected.bind(this)
    }

    clickHandler(piece) {
        let board = this.state.board.slice()

        if (!this.state.selected && piece.type) {
            console.log(1)
            this.highlightMoves(piece, board)
        } else if (this.state.selected && !this.state.available.includes(piece) && piece.type) {
            console.log(2)
            this.unhighlightSelected(board)
            this.highlightMoves(piece, board)            
        } else if (this.state.selected && !this.state.available.includes(piece) && !piece.type) {
            console.log(3)
            this.unhighlightSelected(board)
        } else if (this.state.selected && this.state.available.includes(piece)) {
            const pieceSelected = this.state.selected
            this.unhighlightSelected(board)
            // changing piece 
            const newPieceIndex = board.indexOf(piece)
            board[newPieceIndex].type = pieceSelected.type
            board[newPieceIndex].colour = pieceSelected.colour
            board[newPieceIndex].pieceStyle = pieceSelected.pieceStyle
            
            const oldPieceIndex = board.indexOf(pieceSelected)
            board[oldPieceIndex].type = null
            board[oldPieceIndex].colour = null
            board[oldPieceIndex].pieceStyle = null

            this.setState({
                board: board,
                selected: null
            })
        } else {
            this.setState({
                message: 'Please select a move'
            })
        }
    }

    highlightMoves(piece, board) {
        const newPieceIndex = board.indexOf(piece)
        const moves = getValidMoves(piece, board).map((move) => getPiece(board, move[0], move[1]))
        moves
            .map((move) => board.indexOf(move))
            .forEach((index) => board[index].available = true)
        board[newPieceIndex].style = {...selected}
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
            .forEach((index) => board[index].available = false)
        this.setState({
            board: board,
            selected: null
        })
    }

    render() {
        return (
            <Board
                boardState={this.state.board}
                onClick={(i) => this.clickHandler(i)}
            />
        )
    }
}

export default App