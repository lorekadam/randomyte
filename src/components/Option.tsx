import React, { Component } from 'react';
import { List } from 'react-native-paper';

import { SingleOption } from '../types';

interface Props {
  item: SingleOption;
  remove(key: SingleOption['key']): void;
}

export default class Option extends Component<Props, {}> {
  removeItem = () => {
    const { item, remove } = this.props;
    remove(item.key);
  };

  render() {
    const { item } = this.props;
    return (
      <List.Item
        title={item.text}
        onPress={this.removeItem}
        right={props => <List.Icon {...props} icon="remove" />}
      />
    );
  }
}
