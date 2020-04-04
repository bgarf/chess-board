import React from 'react'
import {square} from './css/board.css'
const {blackKing} = require('../utils/PieceStyling.js')
import blackKingImage from "../utils/images/black-king.svg"

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            class1: `${square}`
        }
    }

    render () {
        console.log('rendering square')
        console.log(blackKing)
        return <div className={this.state.class1} onClick={this.props.onClick} style={{
            backgroundImage: `url(${blackKingImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "80%"
        }}/>
    }
} 

export default Square