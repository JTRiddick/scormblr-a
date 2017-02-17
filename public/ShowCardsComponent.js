'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.SCA === undefined) {
  window.SCA = {};
}

(function () {
  var ShowCardsComponent = function (_React$Component) {
    _inherits(ShowCardsComponent, _React$Component);

    function ShowCardsComponent() {
      _classCallCheck(this, ShowCardsComponent);

      var _this = _possibleConstructorReturn(this, (ShowCardsComponent.__proto__ || Object.getPrototypeOf(ShowCardsComponent)).call(this));

      _this.state = { cards: [], count: 0 };
      return _this;
    }

    _createClass(ShowCardsComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.changedCallback = function () {
          console.log('updating!');
          _this2.setState({
            cards: SCA.Data.getCards()
          });
          console.log('show cards component callback got cards to state');
        };

        SCA.Data.emitter.on('changed', this.changedCallback);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        console.log('unmounting');
        EE.Data.emitter.off('changed', this.changedCallback);
      }
    }, {
      key: 'removeAtIndex',
      value: function removeAtIndex(i) {
        SCA.Data.removeCard(i);
        console.log('removing @', i);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        return React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'cardstack' },
            React.createElement(
              'ul',
              null,
              this.state.cards.map(function (x, index) {
                return React.createElement(
                  'li',
                  { key: index, onClick: function onClick() {
                      _this3.removeAtIndex(index);
                    } },
                  x
                );
              })
            )
          ),
          React.createElement(
            'p',
            null,
            'Times Shuffled: ',
            this.state.count
          )
        );
      }
    }]);

    return ShowCardsComponent;
  }(React.Component);

  SCA.ShowCardsComponent = ShowCardsComponent;
})();
//# sourceMappingURL=ShowCardsComponent.js.map
