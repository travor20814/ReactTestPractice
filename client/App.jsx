// @flow

import React from 'react';
import {
  Route,
} from 'react-router-dom';
import { Switch } from 'react-router';
import debug from 'debug';
import { ApolloProvider } from 'react-apollo';
import { hot } from 'react-hot-loader';
import { StyleRoot } from 'radium';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import MainBoard from './containers/MainBoard.jsx';

// Debug mode
if (process.env.NODE_ENV !== 'production') {
  debug.enable('React_Test:*');
}

const styles = {
  root: {
    width: '100%',
    height: '100%',
    display: 'block',
    position: 'relative',
    overflow: 'hidden',
  },
};

function App({
  client,
  store,
  history,
}: any) {
  return (
    <ApolloProvider client={client} store={store}>
      <Provider store={store}>
        <StyleRoot style={styles.root}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route path="/" component={MainBoard} />
            </Switch>
          </ConnectedRouter>
        </StyleRoot>
      </Provider>
    </ApolloProvider>
  );
}

export default hot(module)(App);
