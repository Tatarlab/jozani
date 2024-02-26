import { Category } from '../../components/icons/shared/categories/types';
import { Currency } from '../blockchain/types';

export interface IChallengeState {
  id: string;
  name: string;
  todo: string[];
  reward: number;
  currency: Currency;
  category: Category;
}
  
export interface IChallengeMethods {
  setId(id: string): void;
  setName(name: string): void;
  getChallenge(): Promise<{
    id: string;
    name: string;
    reward: number;
    currency: Currency;
  } | any>;
  updateTodo(name: string): void;
  deleteTodo(id: number): void;
  setCategory(category: Category): void;
}

export type IChallengeStore = IChallengeState & IChallengeMethods;