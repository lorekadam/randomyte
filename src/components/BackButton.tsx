import React from 'react';
import { withNavigation } from 'react-navigation';
import { IconButton } from 'react-native-paper';
import { NavigationProps } from '../types';

function BackButton(props: NavigationProps) {
  return <IconButton icon="arrow-back" size={20} onPress={() => props.navigation.goBack()} />;
}

export default withNavigation(BackButton);
