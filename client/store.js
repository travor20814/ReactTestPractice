// @flow
/* eslint global-require: 0 */

import thunk from 'redux-thunk';
import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers/index.js';

export function getStore(history) {
  const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(
      thunk,
      routerMiddleware(history),
    )),
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(require('./reducers/index.js').default));
  }

  return store;
}

export default getStore;
