# Primary layout

Usually, when we create a page, we will have a layout, and have several links/tabs that can switch between pages. We create a title in the header, and have three links 'App'/'Repos'/'About' in the header too, while you click these links, it will direct to different pages, but the header is constantly in the page.

Add a new primarylayout file

```js
//src/PrimaryLayout.js
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
```
change index.js to use use primaryLayout directly.

```js
//src/index.js
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
```
Change app to a new clean page:

```js
//src/app.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <div>This is our App page</div>
        </div>
    );
  }
}

export default App;
```


Now visit [http://localhost:3000](http://localhost:3000) and click the app/about/repos link, you will see that the header and link content will always in the page.

## Make Some Changes

Add a link for the page you added in leeson2 (your customize page) and test.
