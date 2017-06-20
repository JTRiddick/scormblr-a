import React, { Component } from 'react';

import style from '../sass/style.scss';

export default class About extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className={style.about}>
        <h1>
          About
        </h1>
        <p>Well, of course you might be "about it"</p>
      </div>
    )
  }
}
