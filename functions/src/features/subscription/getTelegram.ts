import { first } from 'lodash';
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { _createUser } from '../user';
import { ITelegramSubscriptionQuery } from './types';

export const _getTelegramSubscription = async ({ address }: Pick<ITelegramSubscriptionQuery, 'address'>) => {
  const store = await getFirestore();
  const subscriptionsRef = store
    .collection('subscriptions');

  const subscriptionsQuerySnapshot = await subscriptionsRef
    .where('address', '==', address)
    .orderBy('address', 'desc')
    .get();
  
  const subscriptionDocRef = first(subscriptionsQuerySnapshot.docs);

  return subscriptionDocRef;
};

export const getTelegramSubscription = onCall({}, async (req) => {
  return await _getTelegramSubscription(req.data);
});
