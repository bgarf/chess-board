import React from 'react'
import Square from './Square'
const { initialiseBoard, getSquareArray } = require('../utils/Board.js')
import { boardOuterBorder, boardInnerBorder, clicked } from './css/board.css'
import { blackKing, blackQueen, blackBishop, blackKnight, blackRook, blackPawn, whiteKing, whiteQueen, whiteBishop, whiteKnight, whiteRook, whitePawn } from './css/pieces.css'

const styleMapping = { 
    'black-king': blackKing, 'black-queen': blackQueen, 'black-bishop': blackBishop, 'black-knight': blackKnight,
    'black-rook': blackRook, 'black-pawn': blackPawn, 'white-king': whiteKing, 'white-queen': whiteQueen,
    'white-bishop': whiteBishop, 'white-knight': whiteKnight, 'white-rook': whiteRook, 'white-pawn': whitePawn
}
class App extends React.Component {
    constructor(props) {
        super(props)
        const board = initialiseBoard()
        // const startingSquares = 
        this.state = {
            board: board,
            squares: this.getSquareSetUp(board)
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        console.log('hi')
        this.state.className = this.state.className += ` ${clicked}`
    }
    
    getSquareSetUp(currentState) {
        return getSquareArray(currentState).map((value, index) => {
            const pieceStyleClass = styleMapping[`${value.colour}-${value.type}`]
            return <Square 
                        key={index}
                        className={`${pieceStyleClass}`}
                        id={`${value.x}${value.y}`}
                        onClick={this.clickHandler}
                    />
        })
    }

    render() {
        return (
            <div id={ boardOuterBorder }>
                <div id={boardInnerBorder}>
                    {this.state.squares}
                </div>
            </div>)
    }
}

export default App