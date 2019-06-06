import React from 'react';
import { List } from 'react-native-paper';

import { SingleOption } from '../types';

interface Props {
  item: SingleOption;
  remove(key: SingleOption['key']): void;
}

export default function Option(props: Props) {
  const { item, remove } = props;
  function removeItem() {
    remove(item.key);
  }

  return (
    <List.Item
      title={item.text}
      onPress={removeItem}
      right={props => <List.Icon {...props} icon="remove" />}
    />
  );
}
