import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Colors } from 'react-native-paper';
import { SingleOption } from '../types';
import OptionsInput from './OptionsInput';

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  option: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    padding: 5,
    margin: 5,
    borderWidth: 2,
    borderColor: 'black',
  },
  selected: {
    borderColor: Colors.pinkA200,
  },
});

interface State {
  participants: number;
  options: SingleOption[];
}

export default function Tournament() {
  const participantsOptions: number[] = [4, 8, 16, 32];
  const [participants, setParticipants] = useState<State['participants']>(4);
  const [options, setOptions] = useState<State['options']>([]);

  function updateParticipants(option: State['participants']) {
    setParticipants(option);
  }

  function addOption(text: SingleOption['text']) {
    setOptions([...options, { text }]);
  }

  return (
    <View>
      <View style={styles.row}>
        {participantsOptions.map(option => (
          <TouchableOpacity
            key={option}
            style={{ ...styles.option, ...(option === participants ? styles.selected : {}) }}
            onPress={() => updateParticipants(option)}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <OptionsInput add={addOption} />
    </View>
  );
}
