import React from 'react'
import {takenPieceArea, takenPiece} from './css/board.css'

export class TakenPieceCollector extends React.Component {
    constructor(props) {
        super(props)
    }

    renderTakenPieces() {
        return this.props.children.map(
            (piece, index) => {
                return <div key={index} className={`${takenPiece} ${piece.pieceStyle}`}/>
            }
        )
    }

    render() {
        return (
            <div className={ takenPieceArea }>
                { this.props.children ? this.renderTakenPieces() : ''} 
            </div>
        )
    }
}