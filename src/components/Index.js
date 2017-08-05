import React, { Component } from 'react';

import style from '../sass/style.scss';


export default class Index extends Component {
  render() {
    return (
      <div id={style.index} className={style.test}>
        <h1>Welcome To Scormblr</h1>
        <h3>A Place For <em>Stuff</em></h3>
      </div>
    );
  }
}
