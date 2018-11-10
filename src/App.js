import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import cartReducers from './reducers/cartReducers';
import FeedContainer from './containers/FeedContainer';
import Cart from './components/Cart';
import HeaderContainer from './containers/HeaderContainer';

const store = createStore(cartReducers);

class App extends Component {
  render() {
    return (
      <Provider store ={store}>
        <div className="App">
          <Router>
            <div>
              <HeaderContainer></HeaderContainer>
              <Route exact path="/" component={FeedContainer}></Route>
              <Route path="/feed" component={FeedContainer}></Route>
              <Route path="/cart" component={Cart}></Route>
            </div>
          </Router>
          
        </div>
      </Provider>
    );
  }
}

export default App;
