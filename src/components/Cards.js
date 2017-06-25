import React from 'react';

import store from '../store';
import style from '../sass/style.scss';

import ShowCard from './ShowCard';
import WriteCard from './WriteCard';

class Cards extends React.Component {

  constructor(){
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsub = store.subscribe(() => {
      this.setState(store.getState());
    });
    //returns unsubscriber when component unmounts
    // console.log(this.state.card.cards);
  }

  componentWillUnmount(){
    this.unsub();
  }

  render(){
    const currentCards = this.state.card.cards;

    console.log('Cards component render ',currentCards);
    return (<div id={style.Cards}>
      <div>
        <table>
          <tbody>
            {currentCards.map((card,i) => {
              return <ShowCard key={i} name={card.name} text={card.text}/>
            })}
          </tbody>
        </table>
      </div>
      <br/>
      <WriteCard />
    </div>)
  }

}

export default Cards;
