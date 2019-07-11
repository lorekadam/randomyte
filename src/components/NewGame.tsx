import React, { useState } from 'react';
import { Button, Checkbox } from 'react-native-paper';
import { ScrollView, FlatList } from 'react-native';
import BasicView from '../screens/BasicView';
import { Row, Col } from '../styled/Grid';
import { blue, lightBlue, dark } from '../styled/colors';
import Title from './Title';
import InputHistory from './InputHistory';
import { SingleOption, SingleCategorySelect } from '../types';
import OptionsInput from './OptionsInput';
import OptionsList from './OptionsList';
import { IndexKeyExtractor } from '../utils';
import { PaddingView } from '../styled/Views';
import { Text } from '../styled/Text';

export const getCategoryList = (category) => {
  switch (category) {
    case 'Movies':
      return require('../../assets/movies.json');
    case 'Games':
      return require('../../assets/games.json');
    case 'Actors':
      return require('../../assets/actors.json');
    case 'Sport':
      return require('../../assets/sport.json');
  }
};

interface State {
  teamsAmount: number;
  time: number;
  options: SingleOption[];
  categories: { [name: string]: SingleCategorySelect };
}

export default function NewGame() {
  const teamsOptions: number[] = [2, 3, 4, 5, 6];
  const categoriesOptions = ['Movies', 'Games', 'Actors', 'Sport'];

  const timeOptions: { min: number; sec: number }[] = [
    { min: 1, sec: 60 },
    { min: 1.5, sec: 90 },
    { min: 2, sec: 120 },
    { min: 2.5, sec: 150 },
    { min: 3, sec: 180 },
  ];

  const [teamsAmount, setTeamsAmount] = useState<State['teamsAmount']>(2);
  const [time, setTime] = useState<State['time']>(90);
  const [options, setOptions] = useState<State['options']>([]);
  const [categories, setCategories] = useState<State['categories']>({});

  const addOption = (text: SingleOption['text']) => {
    setOptions([...options, { text }]);
  };

  const removeOption = (index: number) => {
    setOptions(options.filter((option, i) => i !== index));
  };

  const updateCategories = (category: string) => {
    const thisCategory = categories[category];
    if (thisCategory) {
      delete categories[category];
      setCategories({ ...categories });
    } else {
      setCategories({
        ...categories,
        [category]: {
          name: category,
          active: true
        },
      });
    }
  }

  const startGame = () => {
    console.log(teamsAmount)
    console.log(time);
    console.log(options);
    console.log(categories);
  }

  return (
    <BasicView>
      <ScrollView>
      <Title text="Ilość drużyn" />
      <Row>
        {teamsOptions.map(option => (
          <Col key={option}>
            <Button
              color={teamsAmount === option ? blue : lightBlue}
              mode="contained"
              onPress={() => setTeamsAmount(option)}
            >
              {option}
            </Button>
          </Col>
        ))}
      </Row>
      <InputHistory onPress={addOption} />
      <Title text="Gracze" />
      <OptionsInput add={addOption} />
      <OptionsList data={options} remove={removeOption} />
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
      <Title text="Kategorie" />
        <FlatList
          numColumns={4}
          data={categoriesOptions}
          keyExtractor={IndexKeyExtractor}
          renderItem={({ item }) => (
            <Col>
              <PaddingView key={item}>
                <Row alignItems="center">
                <Text fontSize={2.1} color={dark} onPress={() => updateCategories(item)}>{item}</Text>
                <Checkbox
                  status={categories[item] && categories[item].active ? 'checked' : 'unchecked'}
                  onPress={() => updateCategories(item)}
                  />  
                </Row>
              </PaddingView>
            </Col>
          )}
        />
      </ScrollView>
      <Button
        color={blue}
        mode="contained"
        onPress={startGame}
        disabled={Object.keys(categories).length === 0 || options.length < teamsAmount * 2}
      >
        START 
      </Button>
    </BasicView>
  );
}
