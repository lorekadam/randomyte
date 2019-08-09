import React from 'react';
import Dice from '../components/Dice';
import BasicView from './BasicView';

const DiceScreen = () => {
  return (
    <BasicView>
      <Dice />
    </BasicView>
  );
};

export default DiceScreen;
