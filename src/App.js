import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import './Library.css';
import './Albums.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <nav class-Name = 'app-header'>
            <Link className = 'link' to='/library'> Albums</Link>
            <Link className = 'link' to='/'>Home</Link>
          </nav>
        <main>
          <Route exact path = '/' component={Landing}/>
          <Route path = '/Library' component={Library}/>
          <Route path = '/album/:slug' component={Album}/>
        </main>
      </div>  
    );
  }
}

export default App;
