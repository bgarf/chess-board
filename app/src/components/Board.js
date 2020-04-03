import React from 'react'
import Square from './Square'
import { boardOuterBorder, boardInnerBorder } from './css/board.css'
const { initialiseBoard, getSquareArray } = require('../utils/Board.js')

import { blackKing, blackQueen, blackBishop, blackKnight, blackRook, blackPawn, whiteKing, whiteQueen, whiteBishop, whiteKnight, whiteRook, whitePawn } from './css/pieces.css'

const styleMapping = { 
    'black-king': blackKing, 'black-queen': blackQueen, 'black-bishop': blackBishop, 'black-knight': blackKnight,
    'black-rook': blackRook, 'black-pawn': blackPawn, 'white-king': whiteKing, 'white-queen': whiteQueen,
    'white-bishop': whiteBishop, 'white-knight': whiteKnight, 'white-rook': whiteRook, 'white-pawn': whitePawn
}

const createSquares = [ ...Array(64) ].map((value, index) => {
    return <Square key={index} className={value}/>
})

class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    getSquares(currentState) {
        return getSquareArray(currentState).map((value, index) => {
            const pieceStyleClass = styleMapping[`${value.colour}-${value.type}`]
            return <Square 
                        key={index}
                        className={`${pieceStyleClass}`}
                        onClick={this.props.onClick(index)}
                    />
        })
    }

    render() {
        const squares = this.getSquares(this.props.boardState)
        return (
            <div id={ boardOuterBorder }>
                <div id={boardInnerBorder}>
                    {squares}
                </div>
            </div>)
    }
}

export default Board