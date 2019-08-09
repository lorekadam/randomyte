import React from 'react';
import { withNavigation } from 'react-navigation';
import { IconButton } from 'react-native-paper';
import { NavigationProps } from '../types';
import { Row } from '../styled/Grid';
import { HOME } from '../screens';

function BackButton(props: NavigationProps) {
  return (
    <Row>
      <IconButton
        icon="arrow-back"
        size={20}
        onPress={() => props.navigation.goBack()}
      />
      <IconButton
        icon="home"
        size={20}
        onPress={() => props.navigation.navigate(HOME)}
      />
    </Row>
  );
}

export default withNavigation(BackButton);
