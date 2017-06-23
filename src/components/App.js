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
import NotFoundPage from './NotFound';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Layout>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Index} />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  </Provider>
);

export default App;
