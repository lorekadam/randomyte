import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

interface State {
  value: string;
}

interface Props {
  add(value: State['value']): void;
}

export default function OptionsInput(props: Props) {
  const [value, setValue] = useState<State['value']>('');

  function updateValue(value: State['value']) {
    setValue(value);
  }

  function addOption() {
    props.add(value);
    setValue('');
  }

  return (
    <View>
      <TextInput label="Option" mode="outlined" value={value} onChangeText={updateValue} />
      <Button icon="add-circle" mode="contained" onPress={addOption} disabled={value.length === 0}>
        Add option
      </Button>
    </View>
  );
}
