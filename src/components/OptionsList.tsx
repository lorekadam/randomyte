import React from 'react';
import { FlatList } from 'react-native';
import Option from './Option';
import { IndexKeyExtractor } from '../utils';

interface Props {
  data: any[];
  remove?: (key: number) => void;
}

export const OptionsList = (props: Props) => {
  const { data, remove } = props;
  return (
    <React.Fragment>
      <FlatList
        keyExtractor={IndexKeyExtractor}
        data={data.slice()}
        renderItem={({ item, index }) => (
          <Option item={item} index={index} remove={remove && remove} />
        )}
      />
    </React.Fragment>
  );
};

export default OptionsList;
