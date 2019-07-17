import { observable, action } from 'mobx';
import { RootStore } from './RootStore';
import { SingleOption, SingleCategorySelect } from '../types';
import { persist } from 'mobx-persist';

export class GameStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @persist @observable teamsAmount: number = 2;

  @persist @observable time: number = 90;

  @persist('list') @observable options: SingleOption[] = [];

  @persist('object') @observable categories: {
    [name: string]: SingleCategorySelect;
  } = {};

  @action resetGameSettings() {
    this.teamsAmount = 2;
    this.time = 90;
    this.options = [];
    this.categories = {};
  }
}
