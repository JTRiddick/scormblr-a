import React from 'react';
import store from '../store.js';

class Clicker extends React.Component {

  constructor(){
    super();

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

  handleClick(evt){
    evt.preventDefault();
    store.dispatch({ type: 'INCREMENT' });
  }

  handleBigClick(){
    store.dispatch({ type: 'INCREMENT_WITH_AMOUNT', value: 5});
  }

  render(){
    return(
      <div>
        clicker
        <p>{this.state.number}</p>
        <button onClick={(evt)=>this.handleClick(evt)}>increase that number</button>
        <button onClick={()=> this.handleBigClick()}>increase by a lot </button>
      </div>
    )
  }
}

export default Clicker;
