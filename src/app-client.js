/* global window document */

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';

ReactDOM.render(
  <Router>
    <App/>
  </Router>
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
