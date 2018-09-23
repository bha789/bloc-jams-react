import React from 'react';

const Landing = () => (
    <section className = 'landing'>
        <div className ='row-two'>        
        <header className ='app-header'>
            <h1 className = 'title'>Bloc Jams</h1>
            <h2 className = 'hero-title'>Turn the music up!</h2>
        </header>
        </div>
    <section className = 'selling-points'>
        <div className = 'point-one'>
            <h2 className = 'point-title'>Choose your music.</h2>
            <p className = 'point-description'>The world is full of music.</p> 
            <p>Why should you have to listen to music that someone else chose?</p>
        </div>
        <div>
        <img className="image" src='/assets/images/mitch-lensink-236502-unsplash.jpg' alt='albums'/>
        </div>
        <div className = 'point-two'>
            <h2 className = 'point-title'>Unlimited, streaming, ad-free.</h2>
            <p className = 'point-description'>No arbitrary limits. No distractions.</p>
        </div>
        <div>
        <img className = 'image' src='/assets/images/madeleine-ragsdale-699632-unsplash.jpg' alt='crowd in concert'/>
        </div>
        <div className = 'point-three'>
            <h2 className = 'point-title'>Mobile enabled</h2>
            <p className = 'point description'>Listen to your music on the go.</p>
            <p> This streaming service is available on all mobile platforms.</p>
        </div>
        <div>
        <img className = 'image' src='/assets/images/hand_with_phone.jpg' alt='hand holding iPhone'/>
        </div>
    </section>
    
    </section>
);

export default Landing; 