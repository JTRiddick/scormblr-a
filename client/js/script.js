(function() {

  console.log('js on page!');

  var mountNode = document.querySelector('#react-root');

  class HelloMessage extends React.Component {
    render () {
      return <div>Hello React!</div>
    }
  }

  ReactDOM.render(<HelloMessage />,mountNode);

}());
