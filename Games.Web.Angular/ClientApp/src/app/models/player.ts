import { Card } from './card';

export interface Player {
  id?: string,
  name: string,
  score: number,
  hand: Card[]
};
