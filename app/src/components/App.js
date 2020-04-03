import React from 'react'
import Board from './Board'
const { initialiseBoard } = require('../utils/Board.js')

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: initialiseBoard()
        }
    }

    clickHandler(index) {
        
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