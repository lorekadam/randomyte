import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Colors } from 'react-native-paper';
import { NavigationScreenProp } from 'react-navigation';
import * as screens from '../screens';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

const styles = StyleSheet.create({
  column: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    borderRadius: 0,
  },
});

export default function HomeScreen(props: Props) {
  return (
    <View style={styles.column}>
      <Button
        style={styles.button}
        icon="shuffle"
        mode="contained"
        onPress={() => props.navigation.navigate(screens.GROUPS)}
      >
        {screens.GROUPS}
      </Button>
      <Button
        style={styles.button}
        color={Colors.grey700}
        icon="loop"
        mode="contained"
        onPress={() => props.navigation.navigate(screens.DICE)}
      >
        {screens.DICE}
      </Button>
      <Button
        style={styles.button}
        color={Colors.yellow500}
        icon="supervisor-account"
        mode="contained"
        onPress={() => props.navigation.navigate(screens.TOURNAMENT)}
      >
        {screens.TOURNAMENT}
      </Button>
      <Button
        style={styles.button}
        color={Colors.indigo900}
        icon="looks-one"
        mode="contained"
        onPress={() => props.navigation.navigate(screens.ONE_FROM_GIVEN)}
      >
        {screens.ONE_FROM_GIVEN}
      </Button>
    </View>
  );
}
