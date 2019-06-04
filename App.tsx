import React from 'react';
import { DefaultTheme, Provider as PaperProvider, Appbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import Groups from './src/components/Groups';

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#C2185B',
    height: Constants.statusBarHeight,
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: 'blue',
  },
};

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <View style={styles.statusBar} />
        <Appbar>
          <Appbar.Action icon="archive" onPress={() => console.log('Pressed archive')} />
        </Appbar>
        <Groups />
      </PaperProvider>
    );
  }
}
