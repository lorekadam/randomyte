import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Checkbox, Button, Text } from 'react-native-paper';
import { IndexKeyExtractor } from '../utils';
import { SingleCategory, Item } from '../types';

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
  }
};

export default function OneFromGiven() {
  const categoriesOptions = ['Movies', 'Games'];
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
    <View>
      <FlatList
        data={categoriesOptions}
        keyExtractor={IndexKeyExtractor}
        renderItem={({ item }) => (
          <View key={item}>
            <Text>{item}</Text>
            <Checkbox
              status={categories[item] && categories[item].active ? 'checked' : 'unchecked'}
              onPress={() => updateCategories(item)}
            />
          </View>
        )}
      />
      <Button
        onPress={random}
        icon="shuffle"
        mode="contained"
        disabled={Object.keys(categories).length === 0}
      >
        Random
      </Button>
      {result !== null && Object.keys(result).length > 0 && (
        <Text style={styles.result}>{result.PL}</Text>
      )}
    </View>
  );
}
