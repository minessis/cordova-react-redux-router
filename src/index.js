'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import reducers from './reducers';
import createStore from './stores';
import { App } from './components';

const history = createMemoryHistory('/');
const store = createStore(reducers);

document.addEventListener('deviceready', () => {
  render(
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Route path="/" component={App}/>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}, false);