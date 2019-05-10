import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from '../../screens/HomeScreen';
import Provirers from '../../redux/Provirers';

it('renders correctly', () => {
  const comp = shallow(<Provirers><HomeScreen /></Provirers>);
  expect(comp).toMatchSnapshot();
});
