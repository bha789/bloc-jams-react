import React from 'react';

const Landing = () => (
    <section className = 'landing'>
        <h1 className = 'hero-title'>Turn the music up!</h1>
    <section className = 'selling-points'>
        <div className = 'point-one'>
            <h2 className = 'point-title'>Choose your music.</h2>
            <p className = 'point-description'>The world is full of music; why should you have to listen to music that someone else chose?</p>
        </div>
        <div className = 'one-image'>
        <img src='mitch-lensink-236502-unsplash.jpg' alt='albums'/>
        </div>
        <div className = 'point-two'>
            <h2 className = 'point-title'>Unlimited, streaming, ad-free.</h2>
            <p className = 'point-description'>No arbitrary limits. No distractions.</p>
        </div>
        <div className = 'two-image'>
        <a href='https://postimages.org/' target='_blank'><img src='https://s22.postimg.cc/s390uvi01/madeleine-ragsdale-699632-unsplash.jpg' border='0' alt='madeleine-ragsdale-699632-unsplash'/></a>
        </div>
        <div className = 'point-three'>
            <h2 className = 'point-title'>Mobile enabled</h2>
            <p className = 'point description'>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        </div>
        <div className = 'three-image'>
        <a href='https://postimages.org/' target='_blank'><img src='https://s22.postimg.cc/89wx1thdd/leio-mclaren-leiomclaren-307308-unsplash_1.jpg' border='0' alt='leio-mclaren-leiomclaren-307308-unsplash_1'/></a>
        </div>
    </section>
    </section>
);

export default Landing; 