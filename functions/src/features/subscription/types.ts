import { ITelegramUserQuery } from '../user';

export interface ITelegramSubscriptionQuery extends ITelegramUserQuery {
  address: string;
}
