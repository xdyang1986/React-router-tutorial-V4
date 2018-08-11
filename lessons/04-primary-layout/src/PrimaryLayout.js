import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import About from "./About";
import Repos from "./Repos";
import App from './App';

class PrimaryLayout extends Component {
    render() {
        return (
            <div>
                <h1>This is our first react-router V4 tutorial</h1>
                <ul role="nav">
                    <li><Link to="/">App</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/repos">Repos</Link></li>
                </ul>
                <Route exact path="/" component={App}/>
                <Route path="/repos" component={Repos}/>
                <Route path="/about" component={About} />
            </div>
        );
    }
}

export default PrimaryLayout;