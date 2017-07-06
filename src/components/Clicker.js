import React,{bindActionCreators} from 'react';
import {connect} from 'react-redux';
// import store from '../reducers/store';

import style from '../sass/style.scss';

class Clicker extends React.Component {

  constructor(){
    super();
    // console.log('clicker props', this);
    // this.state = store.getState();
  }

  componentDidMount() {
    // this.unsub = store.subscribe(() => {
    //   this.setState(store.getState());
    // });
    //returns unsubscriber when component unmounts
    console.log('clicker component did mount :', this.props);
    this.state = this.props.number;
    let { dispatch } = this.props;
  }

  componentWillUnmount(){
    // this.unsub();
  }

  handleClickAdd(){
    dispatch({ type: 'INCREMENT' });
    this.setState({number:this.props.number});
  }

  handleClickSub(){
    dispatch({ type: 'DECREMENT' });
    this.setState({number:this.props.number});

  }

  handleBigClickAdd(){
    dispatch({ type: 'INCREMENT_WITH_AMOUNT', value: 5});
    this.setState({number:this.props.number});
  }

  handleBigClickSub(){
    dispatch({ type: 'DECREMENT_WITH_AMOUNT', value: 5});
    this.setState({number:this.props.number});
  }

  render(){
    return(
      <div className={style.test}>
        clicker
        {console.log('state of clicker is : ',this.state)}
        <p>{this.state ? this.state.number : 0}</p>
        <button onClick={()=>this.handleClickAdd()}>increase that number</button>
        <button onClick={()=>this.handleBigClickAdd()}>increase that number More</button>
        <button onClick={()=> this.handleClickSub()}>decrease that number</button>
        <button onClick={()=> this.handleBigClickSub()}>decrease that number More</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('clicker mapstate to props state :', state);
  return {
    number:state.number
  }
}
export default connect(mapStateToProps)(Clicker);
