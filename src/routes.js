import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Main from './pages/Main';
import Booked from './pages/Booked';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {Main, Booked},
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#FAFAFA',
        },
        headerTintColor: '#BF8654',
      },
    },
  ),
);

export default Routes;
