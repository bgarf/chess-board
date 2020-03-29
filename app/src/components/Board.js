import React from 'react'
import {board, square} from './css/board.css'

const boardSquares = [ ...Array(64) ].map((value, index) => {
    return <div key="index" className={square} />
})

const Board = () => (
    <div id={board}>
        {boardSquares}
    </div>
)

export default Board