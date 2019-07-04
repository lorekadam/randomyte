import React, { useState, useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Button } from 'react-native-paper';
import { SingleOption } from '../types';
import PillOptionsList from './PillOptionsList';

interface State {
  historyOptions: { [name: string]: SingleOption };
}

interface Props {
  onPress(text: string): void;
}

export default function InputHistory(props: Props) {
  const { onPress } = props;
  const [historyOptions, setHistoryOptions] = useState<State['historyOptions']>({});
  useEffect(() => {
    const historyOptions = async () => {
      const result = await AsyncStorage.getItem('historyOptions');
      if (result) {
        setHistoryOptions(JSON.parse(result));
      }
    };
    historyOptions();
  });

  const clearHistory = async () => {
    await AsyncStorage.setItem('historyOptions', '');
    setHistoryOptions({});
  };

  const removeHistoryOption = async (text: string) => {
    delete historyOptions[text];
    await AsyncStorage.setItem('historyOptions', JSON.stringify(historyOptions));
  };

  return (
    Object.keys(historyOptions).length > 0 && (
      <View>
        <Button icon="shuffle" mode="contained" onPress={clearHistory}>
          Wyczyść historię
        </Button>
        {Object.keys(historyOptions).length > 0 && (
          <PillOptionsList
            onPress={onPress}
            onClose={removeHistoryOption}
            data={Object.keys(historyOptions)}
          />
        )}
      </View>
    )
  );
}
