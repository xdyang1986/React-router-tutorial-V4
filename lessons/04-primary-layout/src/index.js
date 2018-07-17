import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import PrimaryLayout from "./PrimaryLayout";

ReactDOM.render((
    <BrowserRouter>
        <PrimaryLayout />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
