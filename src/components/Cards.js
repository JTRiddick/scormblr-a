import React from 'react';
import { connect } from 'react-redux';
// import store from '../reducers/store';
import style from '../sass/style.scss';

import ShowCard from './ShowCard';
import WriteCard from './WriteCard';
import Clicker from './Clicker';

import { cardScramble } from '../actions';

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
    console.log('cards component recieved props :', nextProps);
    this.setState({cards:nextProps.cards, number:nextProps.number});
  }

  scormblPress(){
    console.log('cardScramble is...', this.props.cardScramble);
    if (this.state.number){
      this.props.cardScramble(this.state.cards,this.state.number)
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
  console.log('cards mapStateToProps : ',state)
  return {
    cards:state.card.cards,
    number:state.number.number
  }
}
export default connect(mapStateToProps, {cardScramble})(Cards);
