import React from 'react'
import Square from './Square'
import { boardOuterBorder, boardInnerBorder } from './css/board.css'

class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    getSquares(currentState) {
        return currentState.map((value, index) => {
            return <Square 
                        key={index}
                        className={`${value ? value.style : ''}`}
                        style={value.style}
                        onClick={() => this.props.onClick(value)}
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