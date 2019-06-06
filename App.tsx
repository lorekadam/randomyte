import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { AppContainer } from './src/Navigation';

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
        <AppContainer />
      </PaperProvider>
    );
  }
}
