import React from 'react';

import store from '../reducers/store';
import style from '../sass/style.scss';

import ShowCard from './ShowCard';
import WriteCard from './WriteCard';
import Clicker from './Clicker';

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

  cardScramble(cards,n){
    let newCards = [];

      cards.forEach((card,i)=>{
        let rngI = Math.floor(Math.random() * cards.length);
        let tI = cards[i];
        cards[i] = cards[rngI];
        cards[rngI] = tI;
        if(n < 1){
          newCards = cards;
          return newCards;
        }else{
          n = n - 1;
          this.cardScramble(cards,n);
        }
        return newCards;
      })

  }

  render(){
    var currentCards = [];
    if (this.state.card.cards){
      currentCards = this.cardScramble(this.state.card.cards,this.state.number.number);
      if(!currentCards === 'undefined'){
        console.log('scormbling ');
        currentCards = currentCards.map((card,i)=>{
          return <ShowCard key={i} name={card.name} text={card.text} number={i}/>
        })
      }else{
        currentCards = this.state.card.cards.map((card,i)=>{
          return <ShowCard key={i} name={card.name} text={card.text} number={i}/>
        })
      }
    }else{
      console.log('nothing to card show');
    }

    return (<div >
      <Clicker />
      <div id={style.Cards}>
        <table>
          <tbody>
            {currentCards}
          </tbody>
        </table>
      </div>
      <br/>
      <WriteCard />
    </div>)
  }

}

export default Cards;
