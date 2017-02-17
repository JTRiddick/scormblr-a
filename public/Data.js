'use strict';

if (window.SCA === undefined) {
  window.SCA = {};
}

(function () {

  var cards = [];
  var emitter = new Emitter();

  var data = {

    emitter: emitter,

    addCard: function addCard(card) {
      cards.push(card);
      emitter.emit('changed');
    },
    removeCard: function removeCard(index) {
      cards.splice(1, index);
      emitter.emit('changed');
    },
    shuffleCards: function shuffleCards() {
      for (var i = cards.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        var _ref = [cards[j], cards[i - 1]];
        cards[i - 1] = _ref[0];
        cards[j] = _ref[1];
      }
      emitter.emit('changed');
    },
    getCards: function getCards() {
      return cards;
    }
  };

  SCA.Data = data;
})();
//# sourceMappingURL=Data.js.map
