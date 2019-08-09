import React from 'react';
import { View } from 'react-native';
import { SingleOption } from '../types';
import { Group } from '../styled/Elements';
import OptionsList from './OptionsList';
import { teamColors } from '../globals';
import { Text } from 'react-native-paper';

interface Props {
  colors?: boolean;
  groups: SingleOption[][];
}

export default function Groups(props: Props) {
  const { colors, groups } = props;
  return (
    <View>
      {groups.map((group, i) => (
        <Group color={colors && teamColors[i].color} key={i}>
          {colors && <Text>{teamColors[i].name} team</Text>}
          <OptionsList data={group} />
        </Group>
      ))}
    </View>
  );
}
