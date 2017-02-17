'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.SCA === undefined) {
  window.SCA = {};
}

(function () {
  var AddCardComponent = function (_React$Component) {
    _inherits(AddCardComponent, _React$Component);

    function AddCardComponent() {
      _classCallCheck(this, AddCardComponent);

      var _this = _possibleConstructorReturn(this, (AddCardComponent.__proto__ || Object.getPrototypeOf(AddCardComponent)).call(this));

      _this.state = {
        cards: [],
        count: 0
      };
      return _this;
    }

    _createClass(AddCardComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        SCA.Data.emitter.on('changed', function () {
          _this2.setState({
            cards: SCA.Data.getCards()
          });
          console.log('add card set state from emitter');
        });
      }
    }, {
      key: 'keyUp',
      value: function keyUp(evt) {
        if (evt.keyCode === 13) {
          SCA.Data.addCard(evt.target.value);
          evt.target.value = '';
        }
      }
    }, {
      key: 'scramble',
      value: function scramble(evt) {
        evt.preventDefault();
        SCA.Data.shuffleCards();
        this.setState({
          count: this.state.count++
        });
        console.log('shuffled');
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        return React.createElement(
          'div',
          null,
          React.createElement('input', {
            ref: function ref(input) {
              _this3.input = input;
            },
            onKeyUp: function onKeyUp(evt) {
              _this3.keyUp(evt);
            },
            placeholder: 'write on me'
          }),
          React.createElement(
            'button',
            {
              onClick: function onClick(evt) {
                _this3.scramble(evt);
              }
            },
            ' shuffle '
          )
        );
      }
    }]);

    return AddCardComponent;
  }(React.Component);

  SCA.AddCardComponent = AddCardComponent;
})();
//# sourceMappingURL=AddCardComponent.js.map
