import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, ScrollView,
} from 'react-native';
import { Colors, Button } from 'react-native-paper';
import { SingleOption } from '../types';
import OptionsInput from './OptionsInput';
import OptionsList from './OptionsList';
import TournamentPair from './TournamentPair';

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
  pair: {
    height: 120,
    width: 130,
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});

interface State {
  participants: number;
  options: SingleOption[];
  pairs: SingleOption[][];
}

export default function Tournament() {
  const participantsOptions: number[] = [4, 8, 16, 32];
  const [participants, setParticipants] = useState<State['participants']>(4);
  const [options, setOptions] = useState<State['options']>([]);
  const [pairs, setPairs] = useState<State['pairs']>([]);

  function updateParticipants(option: State['participants']) {
    setParticipants(option);
    setPairs([]);
  }

  function addOption(text: SingleOption['text']) {
    setOptions([...options, { text }]);
  }

  function removeOption(index: number) {
    setOptions(options.filter((option, i) => i !== index));
    setPairs([]);
  }

  function makeTournament() {
    const pairs: State['pairs'] = [];
    const source = [...options];
    let group = 0;
    for (let i = 0; i < options.length; i++) {
      const optionIndex = Math.floor(Math.random() * source.length);
      if (pairs[group] === undefined) {
        pairs[group] = [];
      }
      pairs[group].push(source[optionIndex]);
      group++;
      source.splice(optionIndex, 1);
      if (group === participants / 2) {
        group = 0;
      }
    }
    setPairs(pairs);
  }

  function renderLadder() {
    const elements = [];
    const length = participants / 4;
    for (let i = length; i > 0 / 4; i--) {
      const inside = [];
      for (let j = 0; j < i; j++) {
        inside.push(
          <View key={`inside-${j}`}>
            <View style={styles.pair} />
            {j + 1 !== i && <View style={{ ...styles.pair, borderColor: 'transparent' }} />}
          </View>,
        );
      }
      elements.push(
        <View style={styles.column} key={`outside-${i}`}>
          {inside}
        </View>,
      );
    }
    return elements;
  }

  return (
    <ScrollView>
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
      <Button
        icon="shuffle"
        mode="contained"
        onPress={makeTournament}
        disabled={options.length !== participants}
      >
        Tournament
      </Button>
      {pairs.length > 0 && (
        <ScrollView horizontal>
          <View>
            {pairs.map((pair, i) => (
              <View style={styles.pair} key={i}>
                <TournamentPair data={pair} />
              </View>
            ))}
          </View>
          {renderLadder()}
        </ScrollView>
      )}
      <OptionsInput add={addOption} />
      <OptionsList data={options} remove={removeOption} />
    </ScrollView>
  );
}
