import { Category } from '../../components/icons/shared/categories/types';
import { dayjs } from '../../domains';
import { Currency } from '../blockchain/types';
import { IChallengeState } from './types';

export const INITIAL_STATE: IChallengeState = {
  challenges: {
    'new': {
      name: '',
      reward: 0,
      charityReward: 0,
      cashbackReward: 0,
      currency: Currency.USDT,
      category: Category.Promise,
      createdAt: dayjs().toDate(),
    },
  },
  challengesList: [],
  limit: 5,
  page: 0,
};
