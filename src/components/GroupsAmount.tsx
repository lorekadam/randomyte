import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import NumberInput from './NumberInput';

interface Props {
  number: number;
  update: (number: number) => void;
}

export default function GroupsAmount(props: Props) {
  const { number, update } = props;

  return (
    <View>
      <Text>Groups amount</Text>
      <NumberInput
        number={number}
        update={update}
        disabledRemove={number === 2}
      />
    </View>
  );
}
