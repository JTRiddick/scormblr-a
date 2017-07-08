import React from 'react';
import { connect } from 'react-redux';
// import store from '../reducers/store';
import style from '../sass/style.scss';

import ShowCard from './ShowCard';
import WriteCard from './WriteCard';
import Clicker from './Clicker';

class Cards extends React.Component {

  constructor(props){
    super(props);
    // this.state = store.getState();
    this.state = {cards:props.cards, number:props.number}
  }

  componentDidMount() {
    // this.unsub = store.subscribe(() => {
    //   this.setState(store.getState());
    // });
    //returns unsubscriber when component unmounts
  }

  componentWillUnmount(){
    // this.unsub();
  }

  componentWillReceiveProps(nextProps){
    this.setState({cards:nextProps.cards, number:nextProps.number});
    console.log('cards component recieved props :', nextProps);
  }

  scormblPress(){
    if (this.state.number.number){
      this.props.dispatch({type:'SCRAMBLE',iterations:this.state.number.number})
    }
  }

  render(){
      console.log('Card component state and props :',this.state, this.props);

    return (<div >
      <Clicker />
      <div id={style.Cards}>
        <table>
          <ShowCard cards={this.state.cards}/>
        </table>
        <button onClick={()=>this.scormblPress()}>Scormbl</button>
      </div>
      <br/>
      <WriteCard />
    </div>)
  }

}

// export default Cards;

const mapStateToProps = state => {
  return {
    cards:state.card.cards,
    number:state.number.number
  }
}
export default connect(mapStateToProps)(Cards);
