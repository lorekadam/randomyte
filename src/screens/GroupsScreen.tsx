import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import BasicView from './BasicView';
import { SingleOption } from '../types';
import GroupsAmount from '../components/GroupsAmount';
import RollGroups from '../components/RollGroups';
import OptionsList from '../components/OptionsList';
import OptionsInput from '../components/OptionsInput';
import Groups from '../components/Groups';

interface State {
  text: string;
  options: SingleOption[];
  historyOptions: { [name: string]: SingleOption };
  groupsAmount: number;
  groups: SingleOption[][];
}

export default function GroupsScreen() {
  const [options, setOptions] = useState<State['options']>([]);
  const [groupsAmount, setGroupsAmount] = useState<State['groupsAmount']>(2);
  const [groups, setGroups] = useState<State['groups']>([]);

  const updateGroupsAmount = (number: State['groupsAmount']) => {
    setGroupsAmount(number);
  };

  const addOption = (text: SingleOption['text']) => {
    setOptions([...options, { text }]);
  };

  const removeOption = (index: number) => {
    setOptions(options.filter((option, i) => i !== index));
  };

  return (
    <BasicView>
      <ScrollView>
        <GroupsAmount number={groupsAmount} update={updateGroupsAmount} />
        <RollGroups
          options={options}
          groupsAmount={groupsAmount}
          setGroups={setGroups}
        />
        {groups.length > 0 && <Groups colors={true} groups={groups} />}
        <OptionsInput add={addOption} />
        <OptionsList data={options} remove={removeOption} />
      </ScrollView>
    </BasicView>
  );
}
