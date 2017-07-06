import React from 'react';
import { connect } from 'react-redux';
// import store from '../reducers/store';
import style from '../sass/style.scss';

import ShowCard from './ShowCard';
import WriteCard from './WriteCard';
import Clicker from './Clicker';

class Cards extends React.Component {

  constructor(){
    super();
    // this.state = store.getState();
  }

  componentDidMount() {
    // this.unsub = store.subscribe(() => {
    //   this.setState(store.getState());
    // });
    //returns unsubscriber when component unmounts
    // console.log(this.state.card.cards);
    let { dispatch } = this.props;
  }

  componentWillUnmount(){
    // this.unsub();
  }


  scormblPress(){
    dispatch({type:'SCRAMBLE',iterations:this.state.number.number})
  }

  render(){


    return (<div >
      <Clicker />
      <div id={style.Cards}>
        <table>
          <ShowCard cards={this.state.card.cards}/>
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
    card:state.card
  }
}
export default connect(mapStateToProps)(Cards);
