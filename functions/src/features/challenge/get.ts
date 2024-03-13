import { pick } from 'lodash';
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';

interface IChallengeQuery {
  id: string;
}

export const _getChallenge = async (data: IChallengeQuery) => {
  const { id } = pick(data, ['id']);

  // connect firestore
  const store = await getFirestore();

  const challengesRef = store.collection('challenges');
  const challengeDocRef = challengesRef.doc(id);

  return challengeDocRef;
};

export const getChallenge = onCall({}, async (req) => {
  const store = await getFirestore();

  const challengeDoc = await _getChallenge(req.data);
  const challengeDocData = (await challengeDoc.get()).data();

  const paymentsRef = store.collection('payments');
  const paymentDocRef = paymentsRef.doc(challengeDocData?.paymentId?.id);
  const paymentDocData = (await paymentDocRef.get()).data();

  return {
    id: challengeDoc.id,
    name: challengeDocData?.name,
    paymentId: paymentDocRef?.id,
    reward: paymentDocData?.amount,
  };
});
