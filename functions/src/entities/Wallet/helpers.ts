import { getTRXWalletAdapter } from './adapters';
import { Currency } from '../../features/wallet/types';

export const getAdapter = (currency: Currency) => {
  switch (currency) {
  default:
  case Currency.USDT:
    return getTRXWalletAdapter();
  }
};
