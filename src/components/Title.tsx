import React from 'react';
import { Text } from '../styled/Text';
import { RoundBlock, RoundBlockProps } from '../styled/RoundBlock';
import { dark } from '../styled/colors';

interface Props extends RoundBlockProps {
  fontSize?: number;
  text: string;
  paddingSides?: number;
}

export default function Title(props: Props) {
  return (
    <RoundBlock
      height={props.height}
      round={props.round}
      radius={30}
      bgc={props.bgc ? props.bgc : dark}
      alignItems={props.alignItems ? props.alignItems : 'flex-start'}
      justifyContent={props.justifyContent ? props.justifyContent : 'center'}
      padding={props.padding ? props.padding : 1.2}
      marginVertical={1.5}
    >
      <Text
        paddingSides={props.paddingSides ? props.paddingSides : 1.2}
        fontSize={props.fontSize ? props.fontSize : 3}
      >
        {props.text}
      </Text>
    </RoundBlock>
  );
}
