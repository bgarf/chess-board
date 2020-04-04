import React from 'react'
import Board from './Board'
const { initialisePieces } = require('../utils/Board.js')
import { clicked } from './css/board.css'
const {blackKing} = require('../utils/PieceStyling.js')

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: initialisePieces()
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(piece) {
        let board = this.state.board.slice()
        const pieceIndex = board.indexOf(piece)
        board[pieceIndex].style = {...blackKing}
        this.setState({board: board})
        console.log(piece)
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