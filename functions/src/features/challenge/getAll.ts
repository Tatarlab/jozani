import { pick } from 'lodash';
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';

export const getChallengeAll = onCall({}, async (req) => {
  const { limit = 5, page = 0 } = pick(req.data, ['limit', 'page']);

  // connect firestore
  const store = await getFirestore();

  const challengesRef = store.collection('challenges');
  const paymentsRef = store.collection('payments');
  const challengesQuerySnapshot = challengesRef
    .where('createdAt', '<=', new Date())
    .limit(limit)
    .offset(page * limit);
  const challengesDocs = (await challengesQuerySnapshot.get()).docs;

  return Promise.all(challengesDocs.map(async (doc) => {
    const docData = doc.data();
    const paymentDocRef = paymentsRef.doc(docData?.paymentId?.id);
    const paymentDoc = (await paymentDocRef.get()).data();

    console.log(`id: ${doc.id}`, paymentDoc);

    return {
      id: doc.id,
      name: docData.name,
      reward: paymentDoc?.amount,
    };
  }));
});
