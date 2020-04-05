import React from 'react'
import {takenPieceArea, takenPiece} from './css/board.css'

export class TakenPieceCollector extends React.Component {
    constructor(props) {
        super(props)
    }

    renderTakenPieces() {
        console.log('inside func: ' + this.props.children)

        return this.props.children.map(
            (piece, index) => {
                return <div key={index} className={`${takenPiece} ${piece.pieceStyle}`}/>
            }
        )
    }

    render() {
        console.log('function: ' + this.renderTakenPieces())
        return (
            <div className={ takenPieceArea }>
                { this.props.children ? this.renderTakenPieces() : ''} 
            </div>
        )
    }
}