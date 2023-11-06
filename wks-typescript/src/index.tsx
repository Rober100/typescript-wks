import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/strore';

ReactDOM.render(
 <Provider store={store}>
  <h1>Henry</h1>
 </Provider>,
 document.querySelector('#root')
);