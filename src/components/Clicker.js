import React from 'react';
import store from '../reducers/store';

import style from '../sass/style.scss';

class Clicker extends React.Component {

  constructor(){
    super();
    // console.log('clicker props', this);
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsub = store.subscribe(() => {
      this.setState(store.getState());
    });
    //returns unsubscriber when component unmounts
  }

  componentWillUnmount(){
    this.unsub();
  }

  handleClick(){
    store.dispatch({ type: 'INCREMENT' });
  }

  handleBigClick(){
    store.dispatch({ type: 'INCREMENT_WITH_AMOUNT', value: 5});
  }

  render(){
    return(
      <div className={style.test}>
        clicker
        {console.log('state of clicker is : ',this.state)}
        <p>{this.state.number.number}</p>
        <button onClick={()=>this.handleClick()}>increase that number</button>
        <button onClick={()=> this.handleBigClick()}>increase by a lot </button>
      </div>
    )
  }
}

export default Clicker;
