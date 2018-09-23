import React from 'react';

const Landing = () => (
    <section className = 'landing'>
        <header className ='app-header'>
            <h1 className = 'title'>Bloc Jams</h1>
            <h2 className = 'hero-title'>Turn the music up!</h2>
        </header>
    <section className = 'selling-points'>
        <div className = 'point-one'>
            <h2 className = 'point-title'>Choose your music.</h2>
            <p className = 'point-description'>The world is full of music; why should you have to listen to music that someone else chose?</p>
        </div>
        <div>
        <img className="one-image" src='/assets/images/mitch-lensink-236502-unsplash.jpg' alt='albums'/>
        </div>
        <div className = 'point-two'>
            <h2 className = 'point-title'>Unlimited, streaming, ad-free.</h2>
            <p className = 'point-description'>No arbitrary limits. No distractions.</p>
        </div>
        <div>
        <img className = 'two-image' src='/assets/images/madeleine-ragsdale-699632-unsplash.jpg' alt='crowd in concert'/>
        </div>
        <div className = 'point-three'>
            <h2 className = 'point-title'>Mobile enabled</h2>
            <p className = 'point description'>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        </div>
        <div>
        <img className = 'three-image' src='/assets/images/hand_with_phone.jpg' alt='hand holding iPhone'/>
        </div>
    </section>
        <footer id='bottom-bar-land'>
            <button type='submit'>hidden text</button>
        </footer>
    </section>
);

export default Landing; 