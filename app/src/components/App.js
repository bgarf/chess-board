import React from 'react'
import Square from './Square'
const { initialiseBoard, getSquareArray } = require('../utils/Board.js')
import { boardOuterBorder, boardInnerBorder } from './css/board.css'
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
        const startingSquares = getSquareArray(board).map((value, index) => {
            const pieceStyleClass = styleMapping[`${value.colour}-${value.type}`]
            return <Square key={index} className={`${pieceStyleClass} ${value.x} ${value.y}`}/>
        })
        this.state = {
            board: board,
            squares: startingSquares
        }
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