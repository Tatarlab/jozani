import { Currency } from '../store/blockchain/types';

export const formatAmountCurrency = (amount: number, currency: Currency) => {
  switch (currency) {
    case Currency.USDT:
    default:
      return `${currency} ${amount / 1e6}`;
  }
};
