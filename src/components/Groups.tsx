import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import {
  View, StyleSheet, FlatList, ScrollView,
} from 'react-native';
import { SingleOption } from '../types';

import Option from './Option';

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
});

interface State {
  text: string;
  options: SingleOption[];
}

export default class Groups extends React.Component<{}, State> {
  state: State = {
    text: '',
    options: [],
  };

  changeText = (text) => {
    this.setState({
      text,
    });
  };

  addOption = () => {
    this.setState((prevState) => {
      const { text, options } = prevState;
      return {
        text: '',
        options: [...options, { text, key: `${text}-${options.length + 1}` }],
      };
    });
  };

  removeOption = (key: SingleOption['key']) => {
    const options = [...this.state.options];
    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      if (option.key === key) {
        options.splice(i, 1);
        this.setState({
          options,
        });
        break;
      }
    }
  };

  render() {
    return (
      <ScrollView style={styles.view}>
        <TextInput
          label="Option"
          mode="outlined"
          value={this.state.text}
          onChangeText={this.changeText}
        />
        <Button icon="add-a-photo" mode="contained" onPress={this.addOption}>
          Add option
        </Button>
        <FlatList
          data={this.state.options}
          renderItem={({ item }) => <Option item={item} remove={this.removeOption} />}
        />
      </ScrollView>
    );
  }
}
