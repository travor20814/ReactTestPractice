// @flow
/* eslint no-underscore-dangle: 0, no-console: 0 */

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory/lib/inMemoryCache';
import { ApolloLink } from 'apollo-link';
// import jwtDecode from 'jwt-decode';
import { HttpLink } from 'apollo-link-http';

const httpLink = new HttpLink({
  uri: `${API_HOST}/graphql`,
});

export function createClient() {
  const cache = new InMemoryCache();

  const authMiddleware = new ApolloLink((operation, forward) => {
    const headers = {};

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlU1MTE1YTY2Mzc5ZmExYTdmZDQyYzJlMTZiMjZlOGYxOSIsIm5hbWUiOiLlnIvlnYciLCJpYXQiOjE1Mzk5MjA3MDQsImV4cCI6MTUzOTkyMTYwNH0.AgZiFwD4tYprAkM8EY_iBgg8TR4iWAS0HcpLPEHhFuU';

    if (token) {
      headers.authorization = `Bearer ${token}`;
    }

    operation.setContext({
      headers,
    });

    return forward(operation);
  });

  const client = new ApolloClient({
    link: ApolloLink.from([
      authMiddleware,
      httpLink,
    ]),
    cache,
    dataIdFromObject: o => `${o.id}${o.__typename}`,
  });

  return client;
}

export default createClient;
