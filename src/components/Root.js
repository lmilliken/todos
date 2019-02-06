import React from 'react';
import { Provider } from 'react-redux';
// import { Router, Route, browserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
);

export default Root;
