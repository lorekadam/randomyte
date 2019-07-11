import React, { useState } from 'react';
import { View, AsyncStorage } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

interface State {
  value: string;
}

interface Props {
  add(value: State['value']): void;
}

export default function OptionsInput(props: Props) {
  const [value, setValue] = useState<State['value']>('');

  const updateValue = (value: State['value']) => {
    setValue(value);
  };

  const addOption = async () => {
    props.add(value);
    const historyOptions = await AsyncStorage.getItem('historyOptions');
    if (historyOptions) {
      const newOptionsValue = JSON.parse(historyOptions);
      if (!newOptionsValue[value]) {
        newOptionsValue[value] = { value };
        await AsyncStorage.setItem('historyOptions', JSON.stringify(newOptionsValue));
      }
    } else {
      await AsyncStorage.setItem('historyOptions', JSON.stringify({ [value]: { value } }));
    }
    setValue('');
  };

  return (
    <View>
      <TextInput label="Option" mode="outlined" value={value} onChangeText={updateValue} />
      <Button icon="add-circle" mode="contained" onPress={addOption} disabled={value.length === 0}>
        Add option
      </Button>
    </View>
  );
}
