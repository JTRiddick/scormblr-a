import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from '../reducers';
import Index from './index';
import About from './about';
import Layout from './Layout';
import NotFound from './NotFound';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Layout>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Index} />
      </Switch>
    </Layout>
  </Provider>)

export default App;
