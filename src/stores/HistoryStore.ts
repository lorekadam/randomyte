import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';
import { RootStore } from './RootStore';
import { SingleOption } from '../types';

export class HistoryStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @persist('object') @observable historyOptions: {
    [name: string]: SingleOption;
  } = {};

  @action addHistory(name: string) {
    this.historyOptions = {
      ...this.historyOptions,
      [name]: {
        text: name
      }
    };
  }

  @action removeHistory(name: string) {
    delete this.historyOptions[name];
  }
}
