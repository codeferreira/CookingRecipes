import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Main from './pages/Main';
import Booked from './pages/Booked';

import light from './styles/themes/light';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {Main, Booked},
    {
      tabBarOptions: {
        activeTintColor: light.primary,
        inactiveTintColor: light.disabled,
        showLabel: false,
        style: {
          backgroundColor: '#FFF',
        },
      },
    },
  ),
);

export default Routes;
