import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import albumData from './../data/albums';


class Library extends Component{
    constructor(props){
        super(props);
        this.state = {albums : albumData};
    }

    render(){
        return(
            <section className = 'library'>
                <h1 className = 'header'>Albums</h1>
                {
                    this.state.albums.map((album, index) => 
                        <Link className = 'album-info' to={`/album/${album.slug}`} key={index}>
                            <section className = 'album-links'>
                            <div>{album.title}</div>
                            <div>{album.artist}</div>
                            <div>{album.songs.length} songs</div>
                            </section>
                            <img className = 'album-cover' src={album.albumCover} alt={album.title}></img>
                        </Link>
                    )
                }
                <footer id='bottom-bar'>
                    <p>hidden text</p>
                </footer>
            </section>
        );
    }
}

export default Library; 