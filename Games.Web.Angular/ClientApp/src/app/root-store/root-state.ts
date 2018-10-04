import { AppStoreState } from './app-store';
import { GameStoreState } from './game-store';

export interface State {
  app: AppStoreState.State;
  game: GameStoreState.State;
}