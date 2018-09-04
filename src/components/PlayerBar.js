import React, {Component} from 'react';

class PlayerBar extends Component{
    render(){
        return(
            <section className = 'player-bar'>
                <section id = 'buttons'>
                    <button id = 'previous' onClick = {this.props.handlePrevClick}>
                        <span className="ion-skip-backwards"><i class="icon ion-md-skip-backward"></i></span>
                    </button>
                    <button id = 'play-pause' onClick = {this.props.handleSongClick}>
                    <span className = {this.props.isPlaying ? "icon ion-md-pause" : "icon ion-md-play"}></span>
                    </button>
                    <button id = 'next' onClick = {this.props.handleNextClick}>
                        <span className='ion-next'><i class='icon ion-md-skip-forward'></i></span>
                    </button>
                </section>
                <section id = 'time-controls'>
                    <div className = 'current-time'>-:--</div>
                    <input type='range' className = 'seek-bar' value = '0'/>
                    <div className = 'total-time'>-:--</div>
                </section>
                <section id = 'volume-controls'>
                    <div className = 'ion-volume-low'><i class="icon ion-md-volume-low"></i></div>
                    <input type = 'range' className = 'seek-bar' value = '80'/>
                    <div className = 'ion-volume-high'><i class="icon ion-md-volume-high"></i></div>
                </section>
            </section>
        );
    }
}

    export default PlayerBar; 