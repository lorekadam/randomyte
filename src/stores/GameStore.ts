import { observable } from 'mobx';
import { RootStore } from './RootStore';
import { SingleOption, SingleCategorySelect } from '../types';

export class GameStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable teamsAmount: number = 2;

  @observable time: number = 90;

  @observable options: SingleOption[] = [];

  @observable categories: { [name: string]: SingleCategorySelect } = {};
}
