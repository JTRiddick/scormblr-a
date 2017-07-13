/* global window document */

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './components/Routes';

let store;
  // if (typeof window !== 'undefined'){
  //   store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  // } else{
  //   store = createStore(rootReducer);
  // }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(promise,reduxThunk)
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
, document.getElementById('main'));

// const AppClient = () => (
//   <Router>
//     <App />
//   </Router>
// );
//
// window.onload = () => {
//   render(<AppClient />, document.getElementById('main'));
// };
