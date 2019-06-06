import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { StyleSheet, FlatList, ScrollView } from 'react-native';
import { SingleOption } from '../types';

import Option from './Option';

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
});

interface State {
  text: string;
  options: SingleOption[];
}

export default function Groups() {
  const [text, setText] = useState<State['text']>('');
  const [options, setOptions] = useState<State['options']>([]);

  function changeText(text: State['text']) {
    setText(text);
  }

  function addOption() {
    setText('');
    setOptions([...options, { text, key: `${text}-${options.length + 1}` }]);
  }

  function removeOption(key: SingleOption['key']) {
    setOptions(options.filter(option => option.key !== key));
  }

  return (
    <ScrollView style={styles.view}>
      <TextInput label="Option" mode="outlined" value={text} onChangeText={changeText} />
      <Button icon="add-a-photo" mode="contained" onPress={addOption}>
        Add option
      </Button>
      <FlatList
        data={options}
        renderItem={({ item }) => <Option item={item} remove={removeOption} />}
      />
    </ScrollView>
  );
}
