'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { 
  Router, 
  Route, 
  createMemoryHistory 
} from 'react-router';

import reducers from './reducers';
import createStore from './stores';
import {
  App, 
  Home 
} from './components';

const history = createMemoryHistory('/');
const store = createStore(reducers);

document.addEventListener('deviceready', () => {
  // TODO: investigate the proper use and construction of the react-router@4 routes..
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route component={App}>
          <Route path="/" component={Home}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
  
}, false);