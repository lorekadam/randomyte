import React, { useState, useEffect } from 'react';
import { Button, Text } from 'react-native-paper';
import {
  AsyncStorage, StyleSheet, ScrollView, View,
} from 'react-native';
import { SingleOption } from '../types';

import NumberInput from './NumberInput';
import OptionsInput from './OptionsInput';
import OptionsList from './OptionsList';
import BasicView from '../screens/BasicView';
import PillOptionsList from './PillOptionsList';

const styles = StyleSheet.create({
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
  pastOptions: {[name:string]:SingleOption};
  groupsAmount: number;
  groups: SingleOption[][];
}

export default function Groups() {
  const [options, setOptions] = useState<State['options']>([]);
  const [pastOptions, setPastOptions] = useState<State['pastOptions']>({});
  const [groupsAmount, setGroupsAmount] = useState<State['groupsAmount']>(2);
  const [groups, setGroups] = useState<State['groups']>([]);

  useEffect(() => {
    const getPastGroupOptions = async () => {
      const result = await AsyncStorage.getItem('pastGroupOptions');
      if(result){
        setPastOptions(JSON.parse(result));
      }
    };
    getPastGroupOptions();
  });

  const addOption = async (text: SingleOption['text']) => {
    setOptions([...options, { text }]);
    const pastGroupOptions = await AsyncStorage.getItem('pastGroupOptions');
    if (pastGroupOptions) {
      const newOptionsValue = JSON.parse(pastGroupOptions);
      if(!newOptionsValue[text]){
        newOptionsValue[text] = { text };
        await AsyncStorage.setItem('pastGroupOptions', JSON.stringify(newOptionsValue));
      }
    } else {
      await AsyncStorage.setItem('pastGroupOptions', JSON.stringify({ [text]: { text } }));
    }
  };

  const removeOption = (index: number) => {
    setOptions(options.filter((option, i) => i !== index));
  };

  const removeHistoryOption = async (text: string) => {
    delete pastOptions[text];
    await AsyncStorage.setItem('pastGroupOptions', JSON.stringify(pastOptions));
  }

  const updateGroupsAmount = (number: State['groupsAmount']) => {
    setGroupsAmount(number);
  };

  const makeGroups = () => {
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
  };

  const clearHistory = async () => {
    await AsyncStorage.setItem('pastGroupOptions', '');
    setPastOptions({});
  };

  return (
    <BasicView>
      <ScrollView>
        <Button icon="shuffle" mode="contained" onPress={clearHistory}>
          Clear history
        </Button>
        {Object.keys(pastOptions).length > 0 && 
          <PillOptionsList onPress={addOption} onClose={removeHistoryOption} data={Object.keys(pastOptions)} />
        }
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
    </BasicView>
  );
}
