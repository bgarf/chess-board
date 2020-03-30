import React from 'react'
import {square} from './css/board.css'

const Square = (props) => <div key={props.key} className={`${square} ${props.className}`} />

export default Square