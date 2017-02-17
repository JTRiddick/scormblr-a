if (window.SCA === undefined ) { window.SCA = {}; }

(function() {

  console.log('js on page!');

  var mountNode = document.querySelector('#react-root');

  class AppComponent extends React.Component {
    render () {
      return (<div>
        <header>
          <h1>Event Emitter Example</h1>
          <SCA.AddCardComponent />
        </header>

        <p>This is an example that uses an event emitter to keep multiple components in sync, without having to actually connect them explicitly.</p>

        <SCA.ShowCardsComponent />

        <footer></footer>
      </div>);
    }
  }

  ReactDOM.render(<AppComponent />,mountNode);

}());
