import React from 'react'
import { sidebarOuter, sidebarInner, playerArea, playersColour, playersName, white, black, top} from './css/board.css'
import { TakenPieceCollector } from './PlayerInfo'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id={ sidebarOuter }>
                <div id={ sidebarInner }>
                    <div className={playerArea}>
                        <div className={`${playersName} ${top}`}><div className={`${playersColour} ${black}`} />PLAYER 2 </div>
                        <TakenPieceCollector children={this.props.takenWhite}/>
                    </div>
                    <div className={playerArea}>
                        <TakenPieceCollector children={this.props.takenBlack}/>
                        <div className={`${playersName}`}><div className={`${playersColour} ${white}`} />PLAYER 1</div>
                    </div>
                </div>
            </div>
            )
    }
}

export default Sidebar