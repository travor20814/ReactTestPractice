import React from 'react';
import {
  shallow,
} from 'enzyme';
import Landing from '../../containers/Landing.jsx';

describe('Landing Component', () => {
  const mountedLanding = shallow(<Landing />);

  it('always renders a form', () => {
    const divs = mountedLanding.find('form');
    expect(divs.length).to.equal(1);
  });
});
