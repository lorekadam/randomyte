import React from 'react';
import { View } from 'react-native';
import { Text } from '../styled/Text';
import { RoundBlock } from '../styled/RoundBlock';
import { dark } from '../styled/colors';

interface Props {
  fontSize?: number;
  text: string;
}

export default function Title(props: Props) {
  return (
    <RoundBlock
      radius={30}
      bgc={dark}
      alignItems="flex-start"
      justifyContent="center"
      padding={1.2}
    >
      <Text paddingSides={2} fontSize={props.fontSize ? props.fontSize : 3}>
        {props.text}
      </Text>
    </RoundBlock>
  );
}
