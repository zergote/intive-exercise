import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import BirthdaysCollection from './containers/BirthdaysCollection/';

render(
  <Provider store={store}>
    <BirthdaysCollection />
  </Provider>,
  document.getElementById('app')
);
