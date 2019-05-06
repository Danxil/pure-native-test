import { compose } from 'recompose';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: () => ({
    }),
  },
);
export default compose(createAppContainer)(AppNavigator);
