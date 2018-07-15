import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import About from './About';
import Repos from './Repos';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/repos" component={Repos}/>
            <Route path="/about" component={About}/>
        </div>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
