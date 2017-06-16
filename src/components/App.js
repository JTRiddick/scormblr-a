import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from '../reducers';
import Index from './index';
import About from './about';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/" component={Index} />
    </Switch>
  </Provider>)

export default App;
