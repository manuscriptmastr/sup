import React from 'react';
import ReactDOM from 'react-dom';
import HomePageScreen from './HomePageScreen';
import AllSupsScreen from './AllSupsScreen';
import UserSupsScreen from './UserSupsScreen';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './lib/reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

let Screen = () =>
  <Router>
    <div>
      <Switch>
        <Route path="/sups/:userId" component={UserSupsScreen}/>
        <Route path="/sups" component={AllSupsScreen}/>
        <Route path="/" component={HomePageScreen}/>
      </Switch>
    </div>
  </Router>

let ui =
  <Provider store={store}>
    <Screen />
  </Provider>

ReactDOM.render(ui, document.getElementById('root'));