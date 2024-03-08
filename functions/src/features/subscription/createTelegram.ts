import { v4 as uuidv4 } from 'uuid';
import { onCall } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';
import { getFirestore } from 'firebase-admin/firestore';
import { _createUser } from '../user';
import { ITelegramSubscriptionQuery } from './types';
import { _getTelegramSubscription } from './getTelegram';

export const _createTelegramSubscription = async ({ address, ...telegramUser}: ITelegramSubscriptionQuery) => {
  const store = await getFirestore();
  const subscriptionsRef = store
    .collection('subscriptions');
  
  const user = await _createUser(telegramUser);

  logger.log('  USER', user);

  if (!user) {
    return {};
  }

  const telegramSubscription = await _getTelegramSubscription({ address });

  logger.log('  TG SUB', telegramSubscription);

  if (telegramSubscription) {
    return telegramSubscription;
  }

  const subscriptionId = uuidv4();
  const subscriptionDocRef = subscriptionsRef.doc(subscriptionId);

  await subscriptionDocRef.set({
    ownerId: user?.ref,
    address,
  });

  return await _getTelegramSubscription({ address });
};

export const createTelegramSubscription = onCall({}, async (req) => {
  return await _createTelegramSubscription(req.data);
});
