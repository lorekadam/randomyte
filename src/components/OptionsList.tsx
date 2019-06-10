import React from 'react';
import { FlatList } from 'react-native';
import Option from './Option';

interface Props {
  data: any[];
  remove?(key: number): void;
}

export default function OptionsList(props: Props) {
  const { data, remove } = props;

  function keyExtractor(item: any, index: number) {
    return `${index}`;
  }
  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={data}
      renderItem={({ item, index }) => (
        <Option item={item} index={index} remove={remove && remove} />
      )}
    />
  );
}
