import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

// import store from '../reducers/store';

import Index from './Index';
import About from './About';

import Clicker from './Clicker';
import Cards from './Cards';

import PostsNew from './blog/PostsNew';
import PostsIndex from './blog/PostsIndex';
import PostsShow from './blog/PostsShow';

import Layout from './Layout';
import NotFoundPage from './NotFound';


// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export class App extends React.Component {
  constructor(){
    super();
  }
  componentDidMount(){

  }
  render(){
    return(
      // <Provider store={createStoreWithMiddleware(reducers)}>
        <Layout>
          <Switch>
            <Route exact path="/posts/new" component={PostsNew} />
            <Route exact path="/posts/:id" component={PostsShow} />
            <Route exact path="/posts" component={PostsIndex}/>
            <Route exact path="/clicker" component={Clicker} />
            <Route exact path="/cards" component={Cards} />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Index}/>
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      // </Provider>
    );
  }
}

// export const App = () => (
//   // <Provider store={createStoreWithMiddleware(reducers)}>
//     <Layout>
//       <Switch>
//         <Route exact path="/cards" component={Cards} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/" component={Index}/>
//         <Route component={NotFoundPage} />
//       </Switch>
//     </Layout>
//   // </Provider>
// );

export default App;
