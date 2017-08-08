'use strict';

import {
  createStore,
  applyMiddleware 
} from 'redux';

import thunk from 'redux-thunk';

export default (reducer, initialState = {}, middlewares = []) => {
  return applyMiddleware(thunk, ...middlewares)(createStore)(reducer, initialState);
};
