import { Currency } from '../blockchain/types';

export interface IChallengeState {
  id: string;
  name: string;
  todo: string[];
  reward: number;
  currency: Currency;
}
  
export interface IChallengeMethods {
  setId(id: string): void;
  setName(name: string): void;
  getChallenge(): Promise<{
    id: string;
    name: string;
    reward: number;
    currency: Currency;
  }>;
  updateTodo(name: string): void;
  deleteTodo(id: number): void;
}

export type IChallengeStore = IChallengeState & IChallengeMethods;