import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../stores/RootStore';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-paper';
import { blue } from '../styled/colors';
import { NavigationProps } from '../types';
import { NEW_GAME } from '../screens';

interface Props extends NavigationProps {}

const GameTeams: React.FC = observer((props: Props) => {
  const rootStore = useContext(RootStoreContext);
  const { gameStore } = rootStore;
  const backToSettings = () => {
    props.navigation.navigate(NEW_GAME);
  };

  return (
    <View>
      <Button color={blue} mode="contained" onPress={backToSettings}>
        EDIT
      </Button>
    </View>
  );
});

export default withNavigation(GameTeams);
