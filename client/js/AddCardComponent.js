if (window.SCA === undefined) { window.SCA = {}; }

(function() {

  class AddCardComponent extends React.Component {

    constructor(){
      super();
      this.state={
        cards:[],
        count:0
      }
    }

    componentDidMount(){
      SCA.Data.emitter.on('changed',()=>{
        this.setState({
          cards:SCA.Data.getCards(),
        })
        console.log('add card set state from emitter')
      })

    }

    keyUp(evt) {
      if (evt.keyCode === 13) {
        SCA.Data.addCard(evt.target.value);
        evt.target.value = '';
      }
    }
    scramble(evt){
      evt.preventDefault();
      SCA.Data.shuffleCards();
      this.setState({
        count:this.state.count++
      })
      console.log('shuffled');
    }

    render(){

      return (<div>
          <input
            ref={(input) => {this.input = input }}
            onKeyUp={(evt)=>{this.keyUp(evt)}}
            placeholder = 'write on me'
          />
          <button
            onClick={(evt)=>{this.scramble(evt)}}
          > shuffle </button>
        </div>
      )
    }
  }



  SCA.AddCardComponent = AddCardComponent;
}());
