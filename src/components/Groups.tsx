import React, { useState } from 'react';
import { Button, Text } from 'react-native-paper';
import { StyleSheet, ScrollView, View } from 'react-native';
import { SingleOption } from '../types';

import NumberInput from './NumberInput';
import OptionsInput from './OptionsInput';
import OptionsList from './OptionsList';

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
  const [options, setOptions] = useState<State['options']>([]);
  const [groupsAmount, setGroupsAmount] = useState<State['groupsAmount']>(2);
  const [groups, setGroups] = useState<State['groups']>([]);

  function addOption(text: SingleOption['text']) {
    setOptions([...options, { text }]);
  }

  function removeOption(index: number) {
    setOptions(options.filter((option, i) => i !== index));
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
          <View style={styles.group} key={i}>
            <OptionsList data={group} />
          </View>
        ))}
      <OptionsInput add={addOption} />
      <OptionsList data={options} remove={removeOption} />
    </ScrollView>
  );
}
