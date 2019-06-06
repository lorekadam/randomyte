import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationScreenProp } from 'react-navigation';
import { GROUPS, DICE } from '../screens';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

export default function HomeScreen(props: Props) {
  return (
    <View>
      <Button icon="shuffle" mode="contained" onPress={() => props.navigation.navigate(GROUPS)}>
        Groups
      </Button>
      <Button icon="loop" mode="contained" onPress={() => props.navigation.navigate(DICE)}>
        Dice
      </Button>
    </View>
  );
}
