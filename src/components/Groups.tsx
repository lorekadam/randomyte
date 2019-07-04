import React from 'react';
import { View } from 'react-native';
import { SingleOption } from '../types';
import { Group } from '../styled/Elements';
import OptionsList from './OptionsList';

interface Props {
  groups: SingleOption[][];
}

export default function Groups(props: Props) {
  const { groups } = props;
  return (
    <View>
      {groups.map((group, i) => (
        <Group key={i}>
          <OptionsList data={group} />
        </Group>
      ))}
    </View>
  );
}
