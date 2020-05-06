import React from 'react'
import {square} from './css/board.css'

class Square extends React.Component {
    constructor(props) {
        super(props)
    }

    renderAvailableHighlight() {
        return <div style={{
            margin: '25%',
            width: '50%',
            height: '50%',
            borderRadius: '50%',
            backgroundColor: 'rgb(255, 201, 5)'
        }}/>
    }

    render () {
        const combinedClasses = `${square} ${this.props.className}`
        return <div 
            className={combinedClasses} 
            onClick={this.props.onClick} 
            style={this.props.style}>{this.props.children ? this.renderAvailableHighlight() : ''}
            </div>
    }
} 

export default Square