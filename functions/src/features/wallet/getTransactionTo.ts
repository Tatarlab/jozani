/* eslint-disable @typescript-eslint/no-var-requires */
import { onCall } from 'firebase-functions/v2/https';
import { Wallet } from '../../entities';
import { pick } from 'lodash';
import { Currency } from './types';

export const getWalletTransactionTo = onCall({}, async (req) => {
  const {
    address,
    currency = Currency.USDT,
  } = pick(req.data, ['address', 'currency']);

  const walletInstance = new Wallet(currency);

  return {
    res: await walletInstance
      .getTransactionsTo(address),
  };
});
