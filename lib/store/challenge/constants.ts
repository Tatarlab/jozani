import { Category } from '../../components/icons/shared/categories/types';
import { Currency } from '../blockchain/types';
import { IChallengeState } from './types';

export const INITIAL_STATE: IChallengeState = {
  id: 'new',
  name: '',
  reward: 0,
  currency: Currency.USDT,
  todo: [],
  category: Category.Promise,
};
