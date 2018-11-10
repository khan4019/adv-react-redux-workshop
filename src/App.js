import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import createSagaMiddleware  from 'redux-saga';

import './App.css';
import rootReducers from './reducers/';
import FeedContainer from './containers/FeedContainer';
import Cart from './components/Cart';
import HeaderContainer from './containers/HeaderContainer';
import rootSaga from './sagas/productSagas';
import CartContainer from './containers/CartContainer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers, 
  applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

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
              <Route path="/cart" component={CartContainer}></Route>
            </div>
          </Router>
          
        </div>
      </Provider>
    );
  }
}

export default App;
