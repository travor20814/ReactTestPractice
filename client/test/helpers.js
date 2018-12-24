/* eslint import/no-extraneous-dependencies: 0 */
import {
  mount,
  render,
  configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// global.expect = expect;

global.mount = mount;
global.render = render;
// global.shallow = shallow;
