/* global window document */

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';

let store;
  if (typeof window !== 'undefined'){
    store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  } else{
    store = createStore(rootReducer);
  }


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App/>
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
