import React from 'react';
import store from '../reducers/store';

import style from '../sass/style.scss';

class WriteCard extends React.Component {
  constructor() {
    super();

    // this.state = store.getState();
    this.state = {name: '', text: ''};
  }

  componentDidMount(){
    // this.unsub = store.subscribe(()=>{
    //   this.setState(store.getState())
    // })
  }

  componentWillUnmount(){
    // this.unsub();
  }

  addCardClick(evt){
    evt.preventDefault();
    console.log('clicked add card ',this.state);
    store.dispatch({type:'ADD_CARD', name:this.state.name, text:this.state.text});
  }

  removeCardClick(){
    console.log('removed a card');
    store.dispatch({type:'REMOVE_CARD'});
  }

  render(){
    return (
      <div id={style.cardForm}>
        <h4>Write on this</h4>
        <form onSubmit = {(evt)=>this.addCardClick(evt)}>
          <input value={this.state.name}
          onChange = {(evt) => this.setState({name: evt.target.value})}/>
          <input value={this.state.text}
          onChange = {(evt) => this.setState({text: evt.target.value})}/>
          <button>Add Card</button>
        </form>
          <button onClick={()=> this.removeCardClick()}>Remove Card</button>
      </div>
    )
  }
}


export default WriteCard;
