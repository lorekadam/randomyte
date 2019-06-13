import React from 'react';
import { FlatList } from 'react-native';
import Option from './Option';
import { IndexKeyExtractor } from '../utils';

interface Props {
  data: any[];
  remove?(key: number): void;
}

export default function OptionsList(props: Props) {
  const { data, remove } = props;

  return (
    <FlatList
      keyExtractor={IndexKeyExtractor}
      data={data}
      renderItem={({ item, index }) => (
        <Option item={item} index={index} remove={remove && remove} />
      )}
    />
  );
}
