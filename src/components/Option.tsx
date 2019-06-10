import React from 'react';
import { List, Colors } from 'react-native-paper';

import { SingleOption } from '../types';

interface Props {
  item: SingleOption;
  index: number;
  remove?(key: Props['index']): void;
}

export default function Option(props: Props) {
  const { item, index, remove } = props;

  function removeItem() {
    remove(index);
  }

  return (
    <List.Item
      title={`${index + 1}. ${item.text}`}
      onPress={remove && removeItem}
      right={
        remove
        && (props => <List.Icon {...props} color={Colors.red300} icon="remove-circle-outline" />)
      }
    />
  );
}
