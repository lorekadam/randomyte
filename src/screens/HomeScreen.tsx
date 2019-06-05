import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationScreenProp } from 'react-navigation';
import { GROUPS, DICE } from '../screens';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

export default class HomeScreen extends Component<Props, {}> {
  render() {
    return (
      <View>
        <Button
          icon="shuffle"
          mode="contained"
          onPress={() => this.props.navigation.navigate(GROUPS)}
        >
          Groups
        </Button>
        <Button icon="loop" mode="contained" onPress={() => this.props.navigation.navigate(DICE)}>
          Dice
        </Button>
      </View>
    );
  }
}
