import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import BasicView from '../screens/BasicView';
import { Row, Col } from '../styled/Grid';
import { blue, lightBlue } from '../styled/colors';
import Title from './Title';
import Groups from './Groups';

interface State {
  teams: number;
  time: number;
}

export default function NewGame() {
  const teamsOptions: number[] = [2, 3, 4, 5, 6];
  const timeOptions: { min: number; sec: number }[] = [
    { min: 1, sec: 60 },
    { min: 1.5, sec: 90 },
    { min: 2, sec: 120 },
    { min: 2.5, sec: 150 },
    { min: 3, sec: 180 },
  ];
  const [teams, setTeams] = useState<State['teams']>(2);
  const [time, setTime] = useState<State['time']>(90);
  return (
    <BasicView>
      <Title text="Ilość drużyn" />
      <Row>
        {teamsOptions.map(option => (
          <Col key={option}>
            <Button
              color={teams === option ? blue : lightBlue}
              mode="contained"
              onPress={() => setTeams(option)}
            >
              {option}
            </Button>
          </Col>
        ))}
      </Row>
      <Title text="Gracze" />
      <Groups />
      <Title text="Długość rundy (minuty)" />
      <Row>
        {timeOptions.map((timeOption) => {
          const { min, sec } = timeOption;
          return (
            <Col key={min}>
              <Button
                color={sec === time ? blue : lightBlue}
                mode="contained"
                onPress={() => setTime(sec)}
              >
                {min}
              </Button>
            </Col>
          );
        })}
      </Row>
    </BasicView>
  );
}
