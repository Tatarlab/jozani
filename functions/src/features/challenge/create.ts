import { first, last, pick } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { Currency } from '../wallet';
import { _getIncomes } from '../payment/getIncomes';

export const createChallenge = onCall({}, async (req) => {
  const {
    address,
    currency = Currency.USDT,
    name,
  } = pick(req.data, ['address', 'currency', 'name']);

  // connect firestore
  const store = await getFirestore();

  const createdAt = new Date();

  const challengeId = uuidv4();

  const challengesRef = store.collection('challenges');
  const challengeDocRef = challengesRef.doc(challengeId);

  const lastIncomes = await _getIncomes({ address, currency });
  const lastIncome = last(lastIncomes);

  // no confirmed payment!
  if (!lastIncome) {
    return null;
  }

  // select bound challenge by paymentId
  const challengesQuerySnapshot = await challengesRef
    .where('paymentId', '==', lastIncome?.ref)
    .limit(1)
    .get();

  const challengeBoundPaymentId = first(challengesQuerySnapshot.docs
    .map((doc) => doc.data()));
  const hasLastIncomeBound = !!challengeBoundPaymentId;

  // challenge already bound with payment!
  if (hasLastIncomeBound) {
    return null;
  }

  await challengeDocRef.set({
    paymentId: lastIncome?.ref,
    name,
    createdAt,
    updatedAt: createdAt,
  });

  const { name: challengeName } = pick((await challengeDocRef.get()).data(), [
    'name',
  ]);

  return {
    id: challengeDocRef.id,
    name: challengeName,
  };
});
