import React from 'react';
import Dice from '../components/Dice';
import BasicView from './BasicView';

export default function DiceScreen() {
  return (
    <BasicView>
      <Dice />
    </BasicView>
  );
}
