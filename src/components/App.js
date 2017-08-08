'use strict';

import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Bar from './Bar';
import Foo from './Foo';

export default () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/foo">Foo</Link></li>
      <li><Link to="/bar">Bar</Link></li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/foo" component={Foo}/>
      <Route exact path="/bar" component={Bar}/>
      <Route path="*" component={Home}/>
    </Switch>
  </div>
);