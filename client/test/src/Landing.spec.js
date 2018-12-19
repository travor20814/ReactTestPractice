import React from 'react';
import {
  shallow,
} from 'enzyme';
import ErrorBoundary from '../../containers/ErrorBoundary.jsx';
import {
  Landing,
  formHook,
} from '../../containers/Landing.jsx';

describe('Landing Component', () => {
  const wrapper = shallow(<Landing />);

  it('wrap with Error boundary', () => {
    expect(wrapper.find(ErrorBoundary)).to.have.lengthOf(1);
  });

  it('always renders a form', () => {
    expect(wrapper.find('form')).to.have.lengthOf(1);
  });
});
