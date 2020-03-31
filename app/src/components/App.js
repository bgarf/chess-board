import React from 'react'
import Square from './Square'
import { boardOuterBorder, boardInnerBorder } from './css/board.css'
const { initialiseBoard } = require('../utils/Board.js')

const createSquares = [ ...Array(64) ].map((value, index) => {
    return <Square key={index} className={value}/>
})

class App extends React.Component {
    constructor(props) {
        super(props)
        let boardSetUp = initialiseBoard()
        this.state = {
            squares: createSquares
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
    // console.log(boardSetUp)
}

export default App