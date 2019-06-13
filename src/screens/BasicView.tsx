import React, { ReactNode } from 'react';
import { BackgroundView } from '../styled/Views';
import BackButton from '../components/BackButton';
import { light } from '../styled/colors';

interface Props {
  children: ReactNode;
}

export default function BasicView(props: Props) {
  return (
    <BackgroundView bgc={light} padding={1}>
      <BackButton />
      {props.children}
    </BackgroundView>
  );
}
