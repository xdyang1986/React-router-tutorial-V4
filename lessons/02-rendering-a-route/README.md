# Rendering a Route

Open `index.js` and then

1. import `BrowserRouter` and `Route` from `react-router-dom`
2. reder a `BrowserRouter` insetad of `App`

```js
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render((
	<BrowserRouter>
	  <Route path="/" component={App}/>
	</BrowserRouter>
),document.getElementById('root'));
```

Make sure you are running `npm start` and visit [http://localhost:3000](http://localhost:3000)

You should get screen as before, but this time we didi some sync work between the url and web.
We are using `BrowserRouter` -- It is a <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
  There is the other `HashRouter` we can use -- A <Router> that uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL. However, Hash history does not support location.key or location.state. In previous versions we attempted to shim the behavior but there were edge-cases we couldn’t solve. Any code or plugin that needs this behavior won’t work. As this technique is only intended to support legacy browsers, we encourage you to configure your server to work with <BrowserHistory> instead.
  
 ## Adding More Screens
 
 Create two new component at:
 
 -`src/About.js`
 -`src/Repos.js`
 
 ```js
 //src/About.js
 import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div>This is About page!</div>
        );
    }
}

export default About;
```
```js
//src/Repos.js
import React, {Component} from 'react';

class Repos extends Component {
    render() {
        return (
            <div>This is Repos page!</div>
        );
    }
}

export default Repos;
```

Now we can use these two pages

```js
import About from './About';
import Repos from './Repos';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path="/" component={App}/>
            <Route path="/repos" component={Repos}/>
            <Route path="/about" component={About}/>
        </div>
    </BrowserRouter>
), document.getElementById('root'));
```

now you can visit [http://localhost:3000/about](http://localhost:3000/about) and 
[http://localhost:3000/repos](http://localhost:3000/repos)

