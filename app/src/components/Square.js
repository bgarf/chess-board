import React from 'react'
import {square} from './css/board.css'
class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            class1: `${square} ${this.props.className}`
        }
    }

    render () {
        return <div className={this.state.class1} onClick={this.props.onClick}/>
    }
} 

export default Square