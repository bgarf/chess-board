import React from 'react'
import Board from './Board'
import Sidebar from './Sidebar'
const { initialisePieces, getValidMoves, getPiece, pieces } = require('../utils/Board.js')
import { messageBanner } from './css/board.css'

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
            message: '',
            turn: 'white',
            whiteTakenPiece: [],
            blackTakenPiece: []
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.highlightMoves = this.highlightMoves.bind(this)
        this.unhighlightSelected = this.unhighlightSelected.bind(this)
    }

    clickHandler(piece) {
        let board = this.state.board.slice()

        if (piece.colour === this.state.turn || !piece.type) {
            if (!this.state.selected && piece.type) {
                this.highlightMoves(piece, board)
            } else if (this.state.selected && !this.state.available.includes(piece) && piece.type) {
                this.unhighlightSelected(board)
                this.highlightMoves(piece, board)            
            } else if (this.state.selected && !this.state.available.includes(piece) && !piece.type) {
                this.unhighlightSelected(board)
            } else if (this.state.selected && this.state.available.includes(piece)) {
                const pieceSelected = this.state.selected
                this.unhighlightSelected(board)
                
                board = this.changeSquare(piece, board, pieceSelected)
                board = this.changeSquare(pieceSelected, board)
                
                this.setState({
                    board: board,
                    selected: null,
                    message: null,
                    turn: this.state.turn === 'white' ? 'black' : 'white'
                })
            } else {
                this.setState({
                    message: 'Please select a piece to move'
                })
            }
        } else if (piece.colour !== this.state.turn && this.state.available.includes(piece)) {
            const pieceSelected = {colour: piece.colour, pieceStyle: piece.pieceStyle}
            const piecePreviouslySelected = this.state.selected
            this.unhighlightSelected(board)

            board = this.changeSquare(piece, board, piecePreviouslySelected)
            board = this.changeSquare(piecePreviouslySelected, board)

            if (this.isCheckMate()) {
                this.setState(this.resetState(`CONGRATULATIONS CHECK MATE!!!`))
            } else {          
                this.setState({
                    board: board,
                    selected: null,
                    message: null,
                    turn: this.state.turn === 'white' ? 'black' : 'white',
                    whiteTakenPiece: this.state.turn === 'white' ? this.state.whiteTakenPiece.concat([pieceSelected]) : this.state.whiteTakenPiece,
                    blackTakenPiece: this.state.turn == 'black' ? this.state.blackTakenPiece.concat([pieceSelected]) : this.state.blackTakenPiece
                })
            }
        } else {
            console.log('hey!')
            this.setState({message: 'Pick a piece of your own colour!'})
        }
    }

    resetState(message = '') {
        return {
            board: initialisePieces(),
            selected: null,
            available: [],
            message: message,
            turn: 'white',
            whiteTakenPiece: [],
            blackTakenPiece: []
        }
    }

    changeSquare(piece, board, previousPiece = null) {
        const oldPieceIndex = board.indexOf(piece)
        board[oldPieceIndex].type = previousPiece ? previousPiece.type : null
        board[oldPieceIndex].colour = previousPiece ? previousPiece.colour : null
        board[oldPieceIndex].pieceStyle = previousPiece ? previousPiece.pieceStyle : null
        return board
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
            message: null,
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
            selected: null,
            message: null
        })
    }

    isCheckMate() {
        return this.state.board.filter(piece => piece.type == pieces.KING).length != 2 ? true : false
    }

    render() {
        return (
            <div>
                { this.state.message ? <div className={ messageBanner } children={ this.state.message }/> : ''}
                <div className="sidebar">
                    <Sidebar
                    takenBlack={this.state.blackTakenPiece}
                    takenWhite={this.state.whiteTakenPiece}
                    />
                </div>
                <div className="game">
                    <Board
                    boardState={this.state.board}
                    onClick={(i) => this.clickHandler(i)}
                    />
                </div>
            </div>
        )
    }
}

export default App