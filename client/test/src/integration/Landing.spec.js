import React from 'react';
import { expect } from 'chai';
import {
  mount,
} from 'enzyme';
import sinon from 'sinon';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import ConnectedLanding from '../../../containers/Landing.jsx';

describe('Landing Component With redux form', () => {
  let store;
  let subject;
  let handleSubmit;

  const LandingSubject = () => {
    store = createStore(combineReducers({ form: formReducer }));

    const props = {
      handleSubmit,
    };

    return mount(
      <Provider store={store}>
        <ConnectedLanding {...props} />
      </Provider>
    );
  };

  beforeEach(() => {
    handleSubmit = () => {};
  });

  it('handleSubmit is work correctly', () => {
    handleSubmit = sinon.spy();
    subject = LandingSubject();

    const form = subject.find('form');
    form.simulate('submit');
    expect(handleSubmit.callCount).to.equal(1);
  });
});
