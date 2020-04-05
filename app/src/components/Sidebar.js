import React from 'react'
import { sidebarOuter, sidebarInner, takenPieceArea, playersColour, playersName, white, black} from './css/board.css'
import { TakenPieceCollector } from './PlayerInfo'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id={ sidebarOuter }>
                <div id={ sidebarInner }>
                    <div className={playersName}><div className={`${playersColour} ${black}`} />Player 2 </div>
                    <TakenPieceCollector children={this.props.takenWhite}/>
                    <TakenPieceCollector children={this.props.takenBlack}/>
                    <div className={playersName}><div className={`${playersColour} ${white}`} />Player 1</div>
                </div>
            </div>)
    }
}

export default Sidebar