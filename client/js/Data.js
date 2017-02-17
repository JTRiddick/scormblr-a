if (window.SCA === undefined) {window.SCA = {};}

(function() {

  var cards = [];
  var counter = 0;
  var emitter = new Emitter;

  var data = {

    emitter: emitter,

    addCard:function(card){
      cards.push(card);
      emitter.emit('changed');
    },
    removeCard:function(index){
      cards.splice(1,index);
      emitter.emit('changed');
    },
    shuffleCards:function(){
      for(let i = cards.length; i; i--){
        let j = Math.floor(Math.random() * i);
        [cards[i-1],cards[j]] = [cards[j],cards[i-1]];
      }
      counter+=1;
      emitter.emit('changed');
    },
    getCards: function() {
      return cards;
    },
    getCount: function(){
      return counter
    },
  }

  SCA.Data = data;

}());
