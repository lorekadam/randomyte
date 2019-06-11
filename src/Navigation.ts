import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import GroupsScreen from './screens/GroupsScreen';
import * as screens from './screens';
import DiceScreen from './screens/DiceScreen';
import TournamentScreen from './screens/TournamentScreen';
import OneFromGiven from './components/OneFromGiven';

const AppNavigator = createStackNavigator(
  {
    [screens.HOME]: HomeScreen,
    [screens.GROUPS]: GroupsScreen,
    [screens.DICE]: DiceScreen,
    [screens.TOURNAMENT]: TournamentScreen,
    [screens.ONE_FROM_GIVEN]: OneFromGiven,
  },
  {
    initialRouteName: screens.ONE_FROM_GIVEN,
    headerMode: 'none',
  },
);

export const AppContainer = createAppContainer(AppNavigator);
