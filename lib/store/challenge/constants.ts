import { Currency } from '../blockchain/types';
import { IChallengeState } from './types';

export const INITIAL_STATE: IChallengeState = {
  id: 'new',
  name: '',
  reward: 0,
  currency: Currency.USDT,
  todo: [],
};
