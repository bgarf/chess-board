import React from 'react'
import Square from './Square'
// import initialiseBoard from '../../../cli/Board'
import { boardOuterBorder, board } from './css/board.css'

const createSquares = [ ...Array(64) ].map((value, index) => {
    return <Square key={index} className={value}/>
})

const App = () => {
    const boardElement = (
        <div className={ boardOuterBorder }>
            <div id={board}>
                {createSquares}
            </div>
        </div>
    )
    console.log(createSquares   )
    // let boardSetUp = initialiseBoard()
    return boardElement
}



export default App