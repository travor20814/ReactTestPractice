import createHistory from 'history/createBrowserHistory';
import { getStore } from './store.js';
import { createClient } from './apollo.js';

export const history = createHistory();
export const store = getStore(history);
export const client = createClient(store);
