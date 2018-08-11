# Navigating with Link

Perhaps the most used component in your app is Link. It's almost identical to the <a/> tag you're used to except that it's aware of the Router it was rendered in.

Let's create some navigating in our `App` component

```js
//src/App.js
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
```

Now visit [http://localhost:3000](http://localhost:3000) and click the about/repos link, and click back, click forward.

## Make Some Changes

Add a link for the page you added in leeson2 (your customize page) and test.

[Next: primary-layout](https://github.com/xdyang1986/React-router-tutorial-V4/tree/master/lessons/04-primary-layout)
