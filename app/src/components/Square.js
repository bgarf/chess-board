import React from 'react'
import {square} from './css/board.css'

class Square extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        console.log('rendering square')
        const classX = `${square} ${this.props.className}`
        return <div className={classX} onClick={this.props.onClick} style={this.props.style}/>
    }
} 

export default Square