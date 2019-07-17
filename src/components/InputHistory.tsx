import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import PillOptionsList from './PillOptionsList';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../stores/RootStore';

interface Props {
  onPress: (text: string) => void;
}

export const InputHistory = observer((props: Props) => {
  const rootStore = React.useContext(RootStoreContext);
  const { historyStore } = rootStore;
  const { onPress } = props;

  const clearHistory = () => {
    historyStore.historyOptions = {};
  };

  const removeHistoryOption = (text: string) => {
    historyStore.removeHistory(text);
  };

  return (
    Object.keys(historyStore.historyOptions).length > 0 && (
      <View>
        <Button icon="shuffle" mode="contained" onPress={clearHistory}>
          Wyczyść historię
        </Button>
        {Object.keys(historyStore.historyOptions).length > 0 && (
          <PillOptionsList
            onPress={onPress}
            onClose={removeHistoryOption}
            data={Object.keys(historyStore.historyOptions)}
          />
        )}
      </View>
    )
  );
});

export default InputHistory;
