import { first } from 'lodash';
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { _createUser } from '../user';
import { ITelegramChallengeSubscriptionQuery } from './types';
import { _getChallenge } from '../challenge';

interface IQuery extends Partial<Pick<ITelegramChallengeSubscriptionQuery,
'slug'
>> {
  challengeSubscriptionId?: string;
};

export const _getTelegramChallengeSubscription = async ({ challengeSubscriptionId, slug }: IQuery) => {
  const store = await getFirestore();
  const challengeSubscriptionsRef = store
    .collection('challengeSubscriptions');
  
  if (challengeSubscriptionId) {
    return challengeSubscriptionsRef.doc(challengeSubscriptionId).get();
  }

  if (!slug) {
    throw new Error('Subscription challenge id not specified');
  }
  
  const challengeDoc = await _getChallenge({ id: slug });

  const subscriptionsQuerySnapshot = await challengeSubscriptionsRef
    .where('challengeId', '==', challengeDoc)
    .orderBy('challengeId', 'desc')
    .get();
  
  const subscriptionDocRef = first(subscriptionsQuerySnapshot.docs);

  return subscriptionDocRef;
};

export const getTelegramChallengeSubscription = onCall({}, async (req) => {
  return await _getTelegramChallengeSubscription(req.data);
});
