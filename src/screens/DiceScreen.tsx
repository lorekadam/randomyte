import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import NumberInput from '../components/NumberInput';

interface State {
  max: number;
  roll: number | null;
}

export default class DiceScreen extends Component<{}, State> {
  state: State = {
    max: 6,
    roll: null,
  };

  updateNumber = (max: number) => {
    this.setState({
      max,
    });
  };

  roll = () => {
    const { max } = this.state;
    const min = 1;
    this.setState({
      roll: Math.floor(Math.random() * (max - min + 1)) + min,
    });
  };

  render() {
    const { max, roll } = this.state;
    return (
      <View>
        <Button icon="loop" mode="contained" onPress={this.roll}>
          ROLL
        </Button>
        <NumberInput update={this.updateNumber} number={max} />
        {roll && (
          <Text>
            You rolled:
            {roll}
          </Text>
        )}
      </View>
    );
  }
}
