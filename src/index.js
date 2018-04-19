import React from 'react';
import ReactDOM from 'react-dom';
import HomePageScreen from './HomePageScreen';
import AllSupsScreen from './AllSupsScreen';
import UserSupsScreen from './UserSupsScreen';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

let Screen = () =>
  <Router>
    <div>
      <Switch>
        <Route path="/:userId/sups" component={UserSupsScreen}/>
        <Route path="/sups" component={AllSupsScreen}/>
        <Route path="/" component={HomePageScreen}/>
      </Switch>
    </div>
  </Router>

ReactDOM.render(<Screen />, document.getElementById('root'));
registerServiceWorker();