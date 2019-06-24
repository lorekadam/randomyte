import React from 'react';
import { FlatList } from 'react-native';
import { Chip } from 'react-native-paper';
import { IndexKeyExtractor } from '../utils';

interface Props {
  data: string[];
  onPress(text: string): void;
  onClose(text: string): void;
}

export default function PillOptionsList(props: Props) {
  const { data, onPress, onClose } = props;
  return (
    <FlatList
      horizontal
      keyExtractor={IndexKeyExtractor}
      data={data}
      renderItem={({ item }) => (
        <Chip onPress={() => onPress(item)} onClose={() => onClose(item)}>
          {item}
        </Chip>
      )}
    />
  );
}
