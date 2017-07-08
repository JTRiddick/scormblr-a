import React,{bindActionCreators} from 'react';
import {connect} from 'react-redux';
// import store from '../reducers/store';

import style from '../sass/style.scss';

class Clicker extends React.Component {

  constructor(props){
    super(props);
    // console.log('clicker props', this);
    // this.state = store.getState();
    this.state = { number:props.number};
  }

  componentDidMount() {
    // this.unsub = store.subscribe(() => {
    //   this.setState(store.getState());
    // });
    //returns unsubscriber when component unmounts
  }

  componentWillReceiveProps(nextProps){
    this.setState({number:nextProps.number});
  }

  componentWillUnmount(){
    // this.unsub();
  }

  handleClickAdd(){
    this.props.dispatch({ type: 'INCREMENT' });
  }

  handleClickSub(){
    this.props.dispatch({ type: 'DECREMENT' })
  }

  handleBigClickAdd(){
    this.props.dispatch({ type: 'INCREMENT_WITH_AMOUNT', value: 5});
  }

  handleBigClickSub(){
    this.props.dispatch({ type: 'DECREMENT_WITH_AMOUNT', value: 5});
  }

  render(){
    let number = this.state ? this.state.number.number : 0;
    return(
      <div className={style.test}>
        clicker
        <p>{number}</p>
        <button onClick={()=>this.handleClickAdd()}>increase that number</button>
        <button onClick={()=>this.handleBigClickAdd()}>increase that number More</button>
        <button onClick={()=> this.handleClickSub()}>decrease that number</button>
        <button onClick={()=> this.handleBigClickSub()}>decrease that number More</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    number:state.number
  }
}
export default connect(mapStateToProps)(Clicker);
