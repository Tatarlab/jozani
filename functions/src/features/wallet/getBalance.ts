/* eslint-disable @typescript-eslint/no-var-requires */
import { onCall } from 'firebase-functions/v2/https';
import { Wallet } from '../../entities';
import { pick } from 'lodash';
import { Currency } from './types';
import { getAdapter } from './helpers';

export const getBalanceWallet = onCall({}, async (req) => {
  const {
    address,
    currency = Currency.USDT,
  } = pick(req.data, ['address', 'currency']);

  const walletAdapter = getAdapter(currency);
  const walletInstance = new Wallet(walletAdapter);

  return {
    data: await walletInstance
      .getBalance('TAUFkCDWSRgQ6YAYQRVjyqdpzn7BdGuS5F' || address),
  };
});
