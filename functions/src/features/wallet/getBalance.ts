/* eslint-disable @typescript-eslint/no-var-requires */
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { Wallet } from '../../entities';
import { last, pick } from 'lodash';
import { Currency } from './types';
import { getAdapter } from './helpers';

export const getBalanceWallet = onCall({}, async (req) => {
  const {
    address,
    currency = Currency.USDT,
  } = pick(req.data, ['address', 'currency']);

  // connect firestore
  const store = await getFirestore();

  const walletAdapter = getAdapter(currency);
  const walletInstance = new Wallet(walletAdapter);

  // select wallet doc by Id
  const walletDocRef = store.collection('wallets').doc(address);
  const walletDocData = (await walletDocRef.get()).data();

  const {
    balance: defaultBalance,
  } = pick(walletDocData, ['balance', 'prevBalance']);

  const balance = await walletInstance
    .getBalance(address);

  const isChanged = balance !== defaultBalance;

  const transactionsTo = await walletInstance.getTransactionsTo(address);
  const lastIncome = last(transactionsTo);

  if (isChanged) {
    const updatedAt = +new Date();

    // update wallet doc
    walletDocRef.set({
      balance,
      updatedAt,
    });

    return {
      isChanged,
      balance,
      prevBalance: defaultBalance,
      lastIncome,
    };
  }

  return {
    balance,
    prevBalance: balance,
    lastIncome,
  };
});
