import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import * as screens from '../screens';
import { RoundBlock } from '../styled/RoundBlock';
import { dark, lightBlue, light } from '../styled/colors';
import { PaddingView, BackgroundView } from '../styled/Views';
import { Text } from '../styled/Text';
import { Row, Col } from '../styled/Grid';
import { heightPtoDP } from '../utils';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

export default function HomeScreen(props: Props) {
  function navigate(screen) {
    props.navigation.navigate(screen);
  }

  return (
    <BackgroundView bgc={lightBlue}>
      <Row>
        <Col>
          <PaddingView padding={3}>
            <RoundBlock bgc={dark} onPress={() => navigate(screens.GROUPS)}>
              <Ionicons size={heightPtoDP(15)} color={light} name="md-people" />
              <Text>{screens.GROUPS}</Text>
            </RoundBlock>
          </PaddingView>
        </Col>
        <Col>
          <PaddingView padding={3}>
            <RoundBlock bgc={dark} onPress={() => navigate(screens.DICE)}>
              <Ionicons size={heightPtoDP(15)} color={light} name="md-shuffle" />
              <Text>{screens.DICE}</Text>
            </RoundBlock>
          </PaddingView>
        </Col>
      </Row>
      <Row>
        <Col>
          <PaddingView padding={3}>
            <RoundBlock bgc={dark} onPress={() => navigate(screens.ONE_FROM_GIVEN)}>
              <MaterialIcons size={heightPtoDP(15)} color={light} name="looks-one" />
              <Text>{screens.ONE_FROM_GIVEN}</Text>
            </RoundBlock>
          </PaddingView>
        </Col>
        <Col>
          <PaddingView padding={3}>
            <RoundBlock bgc={dark} onPress={() => navigate(screens.TOURNAMENT)}>
              <Ionicons size={heightPtoDP(15)} color={light} name="md-football" />
              <Text>{screens.TOURNAMENT}</Text>
            </RoundBlock>
          </PaddingView>
        </Col>
      </Row>
    </BackgroundView>
  );
}
