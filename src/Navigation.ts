import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import GroupsScreen from './screens/GroupsScreen';
import * as screens from './screens';
import DiceScreen from './screens/DiceScreen';

const AppNavigator = createStackNavigator(
  {
    [screens.HOME]: HomeScreen,
    [screens.GROUPS]: GroupsScreen,
    [screens.DICE]: DiceScreen,
  },
  {
    initialRouteName: screens.HOME,
    headerMode: 'none',
  },
);

export const AppContainer = createAppContainer(AppNavigator);
