import { NavigationScreenProp } from 'react-navigation';

export interface NavigationProps {
  navigation: NavigationScreenProp<any, any>;
}

export interface SingleOption {
  text: string;
}

export interface SingleCategorySelect {
  name: string;
  active: boolean;
}

export interface SingleCategory {
  name: string;
  active: boolean;
  used: Item[];
  list: Item[];
}

export interface Item {
  PL: string;
  ORIGINAL: string;
}
