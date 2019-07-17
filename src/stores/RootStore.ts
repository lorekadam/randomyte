import { createContext } from 'react';
import { GameStore } from './GameStore';
import { HistoryStore } from './HistoryStore';
import { create } from 'mobx-persist';
import { AsyncStorage } from 'react-native';

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true
});

export class RootStore {
  gameStore = new GameStore(this);
  historyStore = new HistoryStore(this);

  constructor() {
    hydrate('game', this.gameStore);
    hydrate('history', this.historyStore);
  }
}

export const RootStoreContext = createContext(new RootStore());
