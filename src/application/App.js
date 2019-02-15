import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from '../services/store';
import Router from '../routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faDog } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

library.add(faCheckSquare, faCoffee, faDog);

class App extends Component {
  
  render() {
    return (
      <Provider store={store()}>
        <HashRouter>
          <Router />
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
