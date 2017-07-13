/* eslint react/forbid-prop-types: "off" */

import React from 'react';
import { Link } from 'react-router-dom';

import style from '../sass/style.scss';

export class NotFoundPage extends React.Component {
  componentWillMount() {
    const { staticContext } = this.props;
    console.log('static context : ', { staticContext });
    console.log('this.props : ', this.props );
    if (staticContext) {
      staticContext.is404 = true;
    }
  }

  render() {
    return (<div className="not-found">
      <h1>404</h1>
      <h2>Page not found!</h2>
      <p>
        <Link to="/">Go back to the main page</Link>
      </p>
    </div>
    );
  }
}

export default NotFoundPage;
