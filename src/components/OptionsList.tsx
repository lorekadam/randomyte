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
      {data.map((item, index) => (
        <Option item={item} index={index} remove={remove && remove} />
      ))}
      <FlatList
        keyExtractor={IndexKeyExtractor}
        data={data}
        renderItem={({ item, index }) => {
          console.log(item);
          return <Option item={item} index={index} remove={remove && remove} />;
        }}
      />
    </React.Fragment>
  );
};

export default OptionsList;
