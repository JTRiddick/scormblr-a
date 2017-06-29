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

  handleClickAdd(){
    store.dispatch({ type: 'INCREMENT' });
  }

  handleClickSub(){
    store.dispatch({ type: 'DECREMENT' })
  }

  handleBigClickAdd(){
    store.dispatch({ type: 'INCREMENT_WITH_AMOUNT', value: 5});
  }

  handleBigClickSub(){
    store.dispatch({ type: 'DECREMENT_WITH_AMOUNT', value: 5});
  }

  render(){
    return(
      <div className={style.test}>
        clicker
        {console.log('state of clicker is : ',this.state)}
        <p>{this.state.number.number}</p>
        <button onClick={()=>this.handleClickAdd()}>increase that number</button>
        <button onClick={()=>this.handleBigClickAdd()}>increase that number More</button>
        <button onClick={()=> this.handleClickSub()}>decrease that number</button>
        <button onClick={()=> this.handleBigClickSub()}>decrease that number More</button>
      </div>
    )
  }
}

export default Clicker;
