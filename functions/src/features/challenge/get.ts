import { pick } from 'lodash';
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';

export const getChallenge = onCall({}, async (req) => {
  const { id } = pick(req.data, ['id']);

  // connect firestore
  const store = await getFirestore();

  const challengesRef = store.collection('challenges');
  const paymentsRef = store.collection('payments');
  const challengeDocRef = challengesRef.doc(id);
  const challengeDoc = (await challengeDocRef.get()).data();

  const paymentDocRef = paymentsRef.doc(challengeDoc?.paymentId?.id);
  const paymentDoc = (await paymentDocRef.get()).data();

  const { name: challengeName } = pick(challengeDoc, ['name']);

  return {
    id: challengeDocRef.id,
    name: challengeName,
    reward: paymentDoc?.amount,
  };
});
