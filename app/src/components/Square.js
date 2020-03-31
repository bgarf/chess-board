import React from 'react'
import {square, clicked} from './css/board.css'

// const Square = (props) => <div className={`${square} ${props.className}`} />


class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            class1: `${square} ${this.props.className}`
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState({
            class1: `${this.state.class1} ${clicked}`
        })
    }

    render () {
        return <div className={this.state.class1} style={{square}} onClick={this.handleClick}/>
    }
} 

export default Square