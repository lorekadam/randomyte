import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as screens from '../screens';
import { RoundBlock } from '../styled/RoundBlock';
import { dark, light } from '../styled/colors';
import { PaddingView, BackgroundView, AbsoluteView } from '../styled/Views';
import { Text } from '../styled/Text';
import { Row, Col } from '../styled/Grid';
import { heightPtoDP } from '../utils';
import { NavigationProps } from '../types';

export default function HomeScreen(props: NavigationProps) {
  function navigate(screen) {
    props.navigation.navigate(screen);
  }

  return (
    <BackgroundView bgc={light}>
      <Row>
        <Col>
          <PaddingView padding={2}>
            <RoundBlock height={100} bgc={dark} onPress={() => navigate(screens.GROUPS)}>
              <Text fontSize={3.5} padding={1}>
                {screens.GROUPS.toLocaleUpperCase()}
              </Text>
              <AbsoluteView left={-10} bottom={-2}>
                <Ionicons size={heightPtoDP(30)} color={light} name="md-people" />
              </AbsoluteView>
            </RoundBlock>
          </PaddingView>
        </Col>
        <Col>
          <PaddingView padding={2}>
            <RoundBlock height={100} bgc={dark} onPress={() => navigate(screens.ONE_FROM_GIVEN)}>
              <Text fontSize={3.5} padding={1}>
                {screens.ONE_FROM_GIVEN.toLocaleUpperCase()}
              </Text>
              <AbsoluteView left={-10} bottom={-2}>
                <MaterialIcons size={heightPtoDP(30)} color={light} name="looks-one" />
              </AbsoluteView>
            </RoundBlock>
          </PaddingView>
        </Col>
      </Row>
      <Row>
        <Col>
          <PaddingView padding={2}>
            <RoundBlock height={100} bgc={dark} onPress={() => navigate(screens.DICE)}>
              <Text fontSize={3.5} padding={1}>
                {screens.DICE.toLocaleUpperCase()}
              </Text>
              <AbsoluteView left={-10} bottom={-2}>
                <Ionicons size={heightPtoDP(30)} color={light} name="md-shuffle" />
              </AbsoluteView>
            </RoundBlock>
          </PaddingView>
        </Col>
        <Col>
          <PaddingView padding={2}>
            <RoundBlock height={100} bgc={dark} onPress={() => navigate(screens.TOURNAMENT)}>
              <Text fontSize={3.5} padding={1}>
                {screens.TOURNAMENT.toLocaleUpperCase()}
              </Text>
              <AbsoluteView left={-10} bottom={-2}>
                <Ionicons size={heightPtoDP(30)} color={light} name="md-football" />
              </AbsoluteView>
            </RoundBlock>
          </PaddingView>
        </Col>
      </Row>
    </BackgroundView>
  );
}
