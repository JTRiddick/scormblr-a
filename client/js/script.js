if (window.SCA === undefined ) { window.SCA = {}; }

(function() {

  console.log('js on page!');

  var mountNode = document.querySelector('#react-root');

  class AppComponent extends React.Component {
    render () {
      return (<div>
        <header>
          <h1>Event Emitter Card Shuffler Test</h1>
          <SCA.AddCardComponent />
        </header>

        <p>An attempt to test out the event emitter</p>

        <SCA.ShowCardsComponent />

        <footer></footer>
      </div>);
    }
  }

  ReactDOM.render(<AppComponent />,mountNode);

}());
