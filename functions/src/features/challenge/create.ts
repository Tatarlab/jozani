import { first, pick } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { onCall } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';
import { getFirestore } from 'firebase-admin/firestore';
import { Currency } from '../wallet';
import { _getPaymentIncomes } from '../payment/getIncomes';

export const createChallenge = onCall({}, async (req) => {
  const {
    address,
    currency = Currency.USDT,
    name,
    category,
  } = pick(req.data, ['address', 'currency', 'name', 'category']);

  // connect firestore
  const store = await getFirestore();

  const createdAt = new Date();

  const challengeId = uuidv4();

  const challengesRef = store.collection('challenges');
  const challengeDocRef = challengesRef.doc(challengeId);

  const lastIncomes = await _getPaymentIncomes({ address, currency });
  const lastIncome = first(lastIncomes);
  logger.log('  LAST INCOMES [PAYMENT]', lastIncomes.map((li) => li.data()));

  // no confirmed payment!
  if (!lastIncome) {
    return null;
  }

  // select bound challenge by paymentId
  const challengesQuerySnapshot = await challengesRef
    .where('paymentId', '==', lastIncome?.ref)
    .limit(1)
    .get();
  const hasLastIncomeBound = challengesQuerySnapshot.docs.length > 0;

  // challenge already bound with payment!
  if (hasLastIncomeBound) {
    return null;
  }

  await challengeDocRef.set({
    paymentId: lastIncome?.ref,
    name,
    category,
    createdAt,
    updatedAt: createdAt,
  });

  const {
    name: challengeName,
    category: challengeCategory,
  } = pick((await challengeDocRef.get()).data(), [
    'name', 'category',
  ]);

  return {
    id: challengeDocRef.id,
    name: challengeName,
    category: challengeCategory,
  };
});
