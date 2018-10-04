import { Player } from './player';
import { Card } from './card';

export interface Round {
  id?: string,
  timestamp?: Date,
  deck: Card[],
  winner?: Player,
  wildcard?: Card,
  players: Player[],
  cardsDealt: number
};
