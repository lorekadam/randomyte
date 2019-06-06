import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

interface Props {
  number: number;
  update(number: number): void;
  disabledAdd?: boolean;
  disabledRemove?: boolean;
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
    const { number, disabledAdd, disabledRemove } = this.props;
    return (
      <View style={styles.row}>
        <Text>{number}</Text>
        <IconButton
          icon="add-circle-outline"
          color={Colors.blue700}
          size={20}
          onPress={this.plus}
          disabled={disabledAdd}
        />
        <IconButton
          icon="remove-circle-outline"
          color={Colors.red700}
          size={20}
          disabled={disabledRemove}
          onPress={this.minus}
        />
      </View>
    );
  }
}
