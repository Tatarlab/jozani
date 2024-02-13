import { last, pick } from 'lodash';
import { nanoid } from 'nanoid';
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { Wallet } from '../../entities';
import { Currency } from '../wallet';
import { getAdapter } from '../wallet/helpers';

export const createChallenge = onCall({}, async (req) => {
  const {
    address,
    currency = Currency.USDT,
    name,
  } = pick(req.data, ['address', 'currency', 'name']);

  // connect firestore
  const store = await getFirestore();

  // init wallet w/ adapter
  const walletAdapter = getAdapter(currency);
  const walletInstance = new Wallet(walletAdapter);

  const createdAt = +new Date();

  const transactionsTo = await walletInstance.getTransactionsTo(address);

  const challengeId = nanoid();

  // insert firestore
  const challengeDocRef = store
    .collection('challenges')
    .doc(challengeId);

  await challengeDocRef.set({
    name,
    walletAddress: address,
    amount: last(transactionsTo)?.amount,
    createdAt,
    updatedAt: createdAt,
  });

  const challengeDocData = (await challengeDocRef.get()).data();

  return challengeDocData;
});
