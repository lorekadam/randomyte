import { createContext } from 'react';
import { GameStore } from './GameStore';

export class RootStore {
  gameStore = new GameStore(this);
}

export const RootStoreContext = createContext(new RootStore());
