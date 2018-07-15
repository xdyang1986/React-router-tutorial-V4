import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
            <h1>This is our first react-router V4 tutorial</h1>
            <ul role="nav">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/repos">Repos</Link></li>
            </ul>
        </div>
    );
  }
}

export default App;