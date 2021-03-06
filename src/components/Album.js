import React, {Component} from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
    constructor(props) {
      super(props);

     const album = albumData.find( album => {
        return album.slug === this.props.match.params.slug
      });
  
      this.state = {
        album: album, 
        currentSong: album.songs[0],
        isPlaying: false,
        currentTime: 0, 
        currentDuration: album.songs[0].duration,
      };

      this.audioElement = document.createElement('audio');
      this.audioElement.src = album.songs[0].audioSrc; 
    }

    play(){
      this.audioElement.play();
      this.setState({isPlaying: true});
    }
  
    pause(){
      this.audioElement.pause();
      this.setState({isPlaying: false});
    }

    setSong(song){
      this.audioElement.src = song.audioSrc; 
      this.setState({currentSong: song});
    }

    displayIcon (song, index) {
      const isSameSong = this.state.currentSong === song;
     
       if (this.state.isPlaying && isSameSong) {
        return <span className="pause"><i class="icon ion-md-pause"></i></span>  
      } else if (this.state.isHovered === index + 1 ){
        return <span className="play"><i class="icon ion-md-play"></i></span>     
      } else {
        return <span className="songNumber"> {index + 1} </span>
      }
    }

    handleSongClick(song){
      const isSameSong = this.state.currentSong === song; 
      if (this.state.isPlaying && isSameSong){
        this.pause();
      } else {
        if (!isSameSong) {this.setSong(song);}
        this.play();
      }
    }

    handlePrevClick(){
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.max(0, currentIndex - 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play();
    }

    handleNextClick(){
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.min((this.state.album.songs.length - 1), currentIndex + 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play();
    }

    componentDidMount(){
      this.eventListeners = {
        timeupdate: e => {
          this.setState({ currentTime: this.audioElement.currentTime });
        },
        durationchange: e => {
          this.setState({ duration: this.audioElement.duration });
        },
      };
      this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
      this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
    }

    componentWillUnmount(){
      this.audioElement.src = null;
      this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
      this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
    }

    handleTimeChange(e){
      const newTime = this.audioElement.duration * e.target.value; 
      this.audioElement.currentTime = newTime; 
      this.setState({currentTime: newTime});
    }

    formatTime(time){
      const minutes = Math.floor(time / 60);
      const seconds = Math.round(time % 60); 
      if(seconds < 10){
        return minutes + ':' + '0' + seconds; 
      } else {
        return minutes + ':' + seconds; 
      }
      
    }

    handleVolumeChange(e){
      const newVolume = e.target.value; 
      this.audioElement.volume = newVolume; 
      this.setState({volume: newVolume});
    }

    
    render() {
        return (
          <section className="album">
            <section id="album-info">
             <div className="album-details">
              <h1 id="album-title">{this.state.album.title}</h1>
              <h2 className="artist">{this.state.album.artist}</h2>
              <div className="release-info">{this.state.album.releaseInfo}</div>
              </div>
              <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} />
            </section>  
          <table id="song-list">
            <colgroup id= 'songs'>
              <col id="song-number-column" />
              <col id="song-title-column" />
              <col id="song-duration-column" />
            </colgroup>  
            <tbody>
            {
            this.state.album.songs.map((song, index) => 
             <tr className = 'song' key={index} 
                onClick={() => this.handleSongClick(song)} 
                onMouseEnter={() => this.setState({isHovered: index + 1})} 
                onMouseLeave={() => this.setState({isHovered: false})}> 
                <td>{this.displayIcon(song, index)}</td>
                <td>{song.title}</td>
                <td>{this.formatTime(song.duration)}</td>
             </tr>  
             )
           }  
            </tbody>
          </table>
          <PlayerBar 
            isPlaying={this.state.isPlaying}
            currentSong={this.state.currentSong}
            currentTime={this.state.currentTime}
            duration={this.state.duration}
            currentVolume={this.state.currentVolume}
            handleSongClick={() => this.handleSongClick(this.state.currentSong)}
            handlePrevClick={() => this.handlePrevClick()}
            handleNextClick={() => this.handleNextClick()}
            handleTimeChange={(e) => this.handleTimeChange(e)}
            handleVolumeChange={(e) => this.handleVolumeChange(e)}
            formatTime={(e) => this.formatTime(e)}
            /> 
          <footer id='bottom-bar-album'>
                    <p>hidden text</p>
                </footer>  
          </section>
        );
      }
  }


export default Album;