import React from 'react'
import Board from './Board'
import { container } from './css/board.css'

const App = () => {
    const newLocal = <div className={container}><Board /></div>
    return newLocal
}

export default App