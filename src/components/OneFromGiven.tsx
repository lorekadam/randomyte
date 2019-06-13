import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
import { IndexKeyExtractor } from '../utils';
import { SingleCategory, Item } from '../types';
import { Col, Row, RowColumn } from '../styled/Grid';
import { FlexView, BackgroundView, PaddingView } from '../styled/Views';
import { lightBlue, dark, light } from '../styled/colors';
import { Text } from '../styled/Text';
import Title from './Title';
import BackButton from './BackButton';

const styles = StyleSheet.create({
  result: {
    fontSize: 24,
  },
});

interface State {
  categories: { [name: string]: SingleCategory };
  result: Item | null;
}

const endOfList = {
  PL: 'Koniec :)',
  ORIGINAL: 'The End :)',
};

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
    case 'Sitcoms':
      return require('../../assets/sitcoms.json');
      case 'Netflix':
          return require('../../assets/netflix.json');
  }
};

export default function OneFromGiven() {
  const categoriesOptions = ['Movies', 'Games', 'Actors', 'Sport', 'Sitcoms', 'Netflix'];
  const [categories, setCategories] = useState<State['categories']>({});
  const [result, setResult] = useState<State['result']>(null);

  function updateCategories(category: string) {
    const thisCategory = categories[category];
    if (thisCategory) {
      delete categories[category];
      setCategories({ ...categories });
    } else {
      setCategories({
        ...categories,
        [category]: {
          name: category,
          active: true,
          used: [],
          list: getCategoryList(category),
        },
      });
    }
    if (Object.keys(categories).length === 0) {
      setResult(null);
    }
  }

  function random() {
    const activeCategories = Object.keys(categories);
    const categoryName = activeCategories[Math.floor(Math.random() * activeCategories.length)];
    const category = categories[categoryName];
    const { list } = category;
    const randomItemIndex = Math.floor(Math.random() * list.length);
    const item = list[randomItemIndex];
    list.splice(randomItemIndex, 1);
    setResult(item || endOfList);
    setCategories({
      ...categories,
      [categoryName]: {
        ...category,
        used: [...category.used, item],
        list: [...list],
      },
    });
  }

  return (
    <BackgroundView bgc={light} padding={1}>
      <BackButton />
      <Title text="Categories" />
        <FlatList
          numColumns={3}
          data={categoriesOptions}
          keyExtractor={IndexKeyExtractor}
          renderItem={({ item }) => (
            <Col>
              <PaddingView key={item}>
                <Row alignItems="center">
                <Text fontSize={2} color={dark} onPress={() => updateCategories(item)}>{item}</Text>
                <Checkbox
                  status={categories[item] && categories[item].active ? 'checked' : 'unchecked'}
                  onPress={() => updateCategories(item)}
                />  
                </Row>
              </PaddingView>
            </Col>
          )}
        />
        <RowColumn>
          <Button
            onPress={random}
            icon="shuffle"
            mode="contained"
            disabled={Object.keys(categories).length === 0}
            color={dark}
          >
            Hit me with your best shot!
          </Button>
          {result !== null && Object.keys(result).length > 0 && (
            <Text style={styles.result}>{result.PL}</Text>
          )}
        </RowColumn>
    </BackgroundView>
  );
}
