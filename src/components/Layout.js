import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';

import styles from '../sass/style.scss';

export const Layout = props => (
  <div className="app-container">
    <header className={styles.orangeBg}>
      <Link to="/">
        <img className="logo" src="/img/logo.svg" alt="Sitelogo" />
      </Link>
      <Navigation/>
      {console.log('layout props: ',props)}
    </header>
    <div className="app-content">{props.children}</div>
    <footer>
      <p>
        This is a demo app to showcase <strong>universal Javascript </strong>
        with <strong>React</strong> and <strong>Express</strong>.
      </p>
    </footer>
  </div>
);

export default Layout;
