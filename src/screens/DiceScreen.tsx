import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Button, Text, Switch, Colors,
} from 'react-native-paper';
import NumberInput from '../components/NumberInput';

interface State {
  max: number;
  min: number;
  roll: number | null;
  setMin: boolean;
}

const initialState = {
  max: 6,
  min: 1,
  roll: null,
  setMin: false,
};

export default class DiceScreen extends Component<{}, State> {
  state: State = {
    ...initialState,
  };

  updateMax = (max: State['max']) => {
    this.setState({
      max,
    });
  };

  updateMin = (min: State['min']) => {
    this.setState({
      min,
    });
  };

  updateSetMin = () => {
    this.setState(prevState => ({
      setMin: !prevState.setMin,
    }));
  };

  roll = () => {
    const { max, min } = this.state;
    this.setState({
      roll: Math.floor(Math.random() * (max - min + 1)) + min,
    });
  };

  resetAll = () => {
    this.setState({
      ...initialState,
    });
  };

  render() {
    const {
      max, min, roll, setMin,
    } = this.state;
    return (
      <View>
        <Button icon="loop" mode="contained" onPress={this.roll}>
          ROLL
        </Button>
        <Button dark color={Colors.blue300} icon="loop" mode="contained" onPress={this.resetAll}>
          RESET ALL
        </Button>
        <Switch value={setMin} onValueChange={this.updateSetMin} />
        {setMin && (
          <React.Fragment>
            <Text>Set minimum value</Text>
            <NumberInput
              update={this.updateMin}
              number={min}
              disabledAdd={min + 1 === max}
              disabledRemove={min === 1}
            />
          </React.Fragment>
        )}
        <Text>Set maximum value</Text>
        <NumberInput update={this.updateMax} number={max} disabledRemove={max - 1 === min} />
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
