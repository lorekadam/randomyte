import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { AppContainer } from './src/Navigation';
import { dark, blue } from './src/styled/colors';

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: dark,
    height: Constants.statusBarHeight,
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: dark,
    accent: blue,
  },
};

interface State {
  fontLoaded: boolean;
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState<State['fontLoaded']>(false);
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        oswald: require('./assets/fonts/Oswald.ttf'),
      });
      setFontLoaded(true);
    };
    loadFont();
  });
  return (
    <PaperProvider theme={theme}>
      <View style={styles.statusBar} />
      {fontLoaded ? <AppContainer /> : null}
    </PaperProvider>
  );
}
