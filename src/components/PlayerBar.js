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
                    <div className = 'current-time'>{this.props.formatTime(this.props.currentTime)}</div>
                    <input 
                    type='range' 
                    className = 'seek-bar' 
                    value = {this.props.currentTime / this.props.duration || 0}
                    max = '1'
                    min = '0'
                    step = '0.01'
                    onChange = {this.props.handleTimeChange}
                    />
                    <div className="total-time">{this.props.formatTime(this.props.duration)}</div> 
                </section>
                <section id = 'volume-controls'>
                    <div className = 'volume-controls'>{this.props.volume}</div>
                    <span className='ion-volume-low'><i class='icon ion-md-volume-low'></i></span>
                    <input 
                    type = 'range' 
                    className = 'seek-bar' 
                    value = {this.props.volume}
                    max = '1'
                    min = '0'
                    step = '0.01'
                    onChange = {this.props.handleVolumeChange}
                    />
                    <span className='ion-volume-high'><i class='icon ion-md-volume-high'></i></span>
                </section>
            </section>
        );
    }
}

    export default PlayerBar; 