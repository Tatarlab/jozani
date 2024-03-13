import { ITelegramUserQuery } from '../user';

export interface ITelegramWalletSubscriptionQuery extends ITelegramUserQuery {
  address: string;
}

export interface ITelegramChallengeSubscriptionQuery extends ITelegramUserQuery {
  // subscriptionChallengeId?: string;
  slug: string;
}
