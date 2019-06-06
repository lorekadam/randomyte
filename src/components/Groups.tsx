import React, { useState } from 'react';
import { TextInput, Button, Text } from 'react-native-paper';
import { StyleSheet, FlatList, ScrollView } from 'react-native';
import { SingleOption } from '../types';

import Option from './Option';
import NumberInput from './NumberInput';

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
  group: {
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});

interface State {
  text: string;
  options: SingleOption[];
  groupsAmount: number;
  groups: SingleOption[][];
}

export default function Groups() {
  const [text, setText] = useState<State['text']>('');
  const [options, setOptions] = useState<State['options']>([]);
  const [groupsAmount, setGroupsAmount] = useState<State['groupsAmount']>(2);
  const [groups, setGroups] = useState<State['groups']>([]);

  function changeText(text: State['text']) {
    setText(text);
  }

  function addOption() {
    setText('');
    setOptions([...options, { text }]);
  }

  function removeOption(index: number) {
    setOptions(options.filter((option, i) => i !== index));
  }

  function keyExtractor(item: SingleOption, index: number) {
    return `${index}`;
  }

  function updateGroupsAmount(number: State['groupsAmount']) {
    setGroupsAmount(number);
  }

  function makeGroups() {
    const groups: State['groups'] = [];
    const source = [...options];
    let group = 0;
    for (let i = 0; i < options.length; i++) {
      const optionIndex = Math.floor(Math.random() * source.length);
      if (groups[group] === undefined) {
        groups[group] = [];
      }
      groups[group].push(source[optionIndex]);
      group++;
      source.splice(optionIndex, 1);
      if (group === groupsAmount) {
        group = 0;
      }
    }
    setGroups(groups);
  }

  return (
    <ScrollView style={styles.view}>
      <Text>Groups amount</Text>
      <NumberInput
        number={groupsAmount}
        update={updateGroupsAmount}
        disabledRemove={groupsAmount === 2}
      />
      <Button
        icon="shuffle"
        mode="contained"
        onPress={makeGroups}
        disabled={options.length < groupsAmount}
      >
        Random
      </Button>
      {groups.length > 0
        && groups.map((group, i) => (
          <FlatList
            style={styles.group}
            keyExtractor={keyExtractor}
            data={group}
            key={i}
            renderItem={({ item, index }) => <Text>{`${index + 1}. ${item.text}`}</Text>}
          />
        ))}
      <TextInput label="Option" mode="outlined" value={text} onChangeText={changeText} />
      <Button icon="add-circle" mode="contained" onPress={addOption} disabled={text.length === 0}>
        Add option
      </Button>
      <FlatList
        keyExtractor={keyExtractor}
        data={options}
        renderItem={({ item, index }) => <Option item={item} index={index} remove={removeOption} />}
      />
    </ScrollView>
  );
}
