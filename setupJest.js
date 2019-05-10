import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

const mockFetch = require('jest-fetch-mock');

global.fetch = mockFetch;

Enzyme.configure({ adapter: new Adapter() });
