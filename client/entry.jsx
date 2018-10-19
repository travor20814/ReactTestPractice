// @flow
/* eslint global-require: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {
  history,
  store,
  client,
} from './global.js';

ReactDOM.render(<App store={store} client={client} history={history} />, document.getElementById('root'));
