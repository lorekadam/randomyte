import React, { useState } from 'react';
import { View } from 'react-native';
import {
  Button, Text, Switch, Colors,
} from 'react-native-paper';
import NumberInput from '../components/NumberInput';

interface State {
  max: number;
  min: number;
  roll: number | null;
  minInput: boolean;
}

const initialState = {
  max: 6,
  min: 1,
  roll: null,
  minInput: false,
};

export default function DiceScreen() {
  const [max, setMax] = useState<State['max']>(initialState.max);
  const [min, setMin] = useState<State['min']>(initialState.min);
  const [roll, setRoll] = useState<State['roll']>(initialState.roll);
  const [minInput, setMinInput] = useState<State['minInput']>(initialState.minInput);

  function updateMax(max: State['max']) {
    setMax(max);
  }

  function updateMin(min: State['min']) {
    setMin(min);
  }

  function updateRoll() {
    setRoll(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  function updateMinInput() {
    setMinInput(!minInput);
  }

  function resetAll() {
    setMax(initialState.max);
    setMin(initialState.min);
    setRoll(initialState.roll);
    setMinInput(initialState.minInput);
  }

  return (
    <View>
      <Button icon="loop" mode="contained" onPress={updateRoll}>
        ROLL
      </Button>
      <Button dark color={Colors.blue300} icon="loop" mode="contained" onPress={resetAll}>
        RESET ALL
      </Button>
      <Switch value={minInput} onValueChange={updateMinInput} />
      {minInput && (
        <React.Fragment>
          <Text>Set minimum value</Text>
          <NumberInput
            update={updateMin}
            number={min}
            disabledAdd={min + 1 === max}
            disabledRemove={min === 1}
          />
        </React.Fragment>
      )}
      <Text>Set maximum value</Text>
      <NumberInput update={updateMax} number={max} disabledRemove={max - 1 === min} />
      {roll && (
        <Text>
          You rolled:
          {roll}
        </Text>
      )}
    </View>
  );
}
