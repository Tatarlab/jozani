/* eslint-disable @typescript-eslint/no-var-requires */
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { Wallet } from '../../entities';
import { pick } from 'lodash';
import { Currency } from './types';
import { getAdapter } from './helpers';

export const lastActivityWallet = onCall({}, async (req) => {
  const {
    address,
    currency = Currency.USDT,
  } = pick(req.data, ['address', 'currency']);

  // connect firestore
  const store = await getFirestore();

  const walletAdapter = getAdapter(currency);
  const walletInstance = new Wallet(walletAdapter);
  console.log('///////////', store);

  return {
    res: await walletInstance
      .getTransactionsTo('TAUFkCDWSRgQ6YAYQRVjyqdpzn7BdGuS5F' || address),
  };
});
