import { first } from 'lodash';
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { _createUser } from '../user';
import { ITelegramWalletSubscriptionQuery } from './types';

export const _getTelegramWalletSubscription = async ({ address }: Pick<ITelegramWalletSubscriptionQuery, 'address'>) => {
  const store = await getFirestore();
  const walletSubscriptionsRef = store
    .collection('walletSubscriptions');

  const subscriptionsQuerySnapshot = await walletSubscriptionsRef
    .where('address', '==', address)
    .orderBy('address', 'desc')
    .get();
  
  const subscriptionDocRef = first(subscriptionsQuerySnapshot.docs);

  return subscriptionDocRef;
};

export const getTelegramWalletSubscription = onCall({}, async (req) => {
  return await _getTelegramWalletSubscription(req.data);
});
