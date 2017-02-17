if (window.SCA === undefined) { window.SCA = {} ;}

(function() {

  class ShowCardsComponent extends React.Component {

    constructor(){
      super();
      this.state = {cards:[],count:0};
    }

    componentDidMount(){
      this.changedCallback = () => {
        console.log('updating!');
        this.setState({
          cards: SCA.Data.getCards()
        })
        console.log('show cards component callback got cards to state');
      };

      SCA.Data.emitter.on('changed', this.changedCallback);
    }

    componentWillUnmount() {
      console.log('unmounting');
      EE.Data.emitter.off('changed', this.changedCallback);
    }

    removeAtIndex(i){
      SCA.Data.removeCard(i);
      console.log('removing @',i);
    }

    render(){

      return (<div>

          <div className='cardstack'>
          <ul>
            {this.state.cards.map((x,index)=>{
              return <li key={index} onClick={() => {this.removeAtIndex(index)}}>{x}</li>
            })}
          </ul>
        </div>
        <p>Times Shuffled: {this.state.count}</p>
      </div>)
    }
  }


  SCA.ShowCardsComponent = ShowCardsComponent;
}());
