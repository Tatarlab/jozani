import { Category } from '../../components/icons/shared/categories/types';
import { Currency } from '../blockchain/types';

export interface IChallenge {
  id?: string;
  name: string;
  reward: number;
  charityReward: number;
  cashbackReward: number;
  currency: Currency;
  category: Category;
  createdAt: Date | number;
}

export interface IChallengeState {
  challenges: Record<string, IChallenge>;
  challengesList: IChallenge[];
  limit?: number;
  page?: number;
}
  
export interface IChallengeMethods {
  setName(name: string): void;
  getChallenge(id: string): Promise<IChallenge>;
  getChallengeAll(): Promise<IChallenge[]>;
  setCategory(category: Category): void;
}

export type IChallengeStore = IChallengeState & IChallengeMethods;