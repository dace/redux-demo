import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxCounter } from './components/ReduxCounter';
import configureStore from './store/index';

const store = configureStore();
const rootElement = document.getElementById('root');

render (
  <Provider store={store}>
    <ReduxCounter/>
  </Provider>,
  rootElement
)
