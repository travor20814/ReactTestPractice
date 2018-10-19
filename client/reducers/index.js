// @flow

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
// reducers

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
});
