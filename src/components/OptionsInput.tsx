import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { observer } from 'mobx-react-lite';

interface State {
  value: string;
}

interface Props {
  add: (value: State['value']) => void;
}

export const OptionsInput = observer((props: Props) => {
  const [value, setValue] = useState<State['value']>('');

  const updateValue = (value: State['value']) => {
    setValue(value);
  };

  const addOption = async () => {
    props.add(value);
    setValue('');
  };

  return (
    <View>
      <TextInput
        label="Option"
        mode="outlined"
        value={value}
        onChangeText={updateValue}
      />
      <Button
        icon="add-circle"
        mode="contained"
        onPress={addOption}
        disabled={value.length === 0}>
        Add option
      </Button>
    </View>
  );
});

export default OptionsInput;
