import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

interface Props {
  number: number;
  update(number: number): void;
}

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default class NumberInput extends Component<Props, {}> {
  plus = () => {
    const { update, number } = this.props;
    update(number + 1);
  };

  minus = () => {
    const { update, number } = this.props;
    update(number - 1);
  };

  render() {
    const { number } = this.props;
    return (
      <View style={styles.row}>
        <Text>{number}</Text>
        <IconButton icon="add" color={Colors.blue700} size={20} onPress={this.plus} />
        <IconButton
          icon="remove"
          color={Colors.red700}
          size={20}
          disabled={number === 0}
          onPress={this.minus}
        />
      </View>
    );
  }
}
