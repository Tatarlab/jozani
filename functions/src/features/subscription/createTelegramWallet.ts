import { v4 as uuidv4 } from 'uuid';
import { onCall } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';
import { getFirestore } from 'firebase-admin/firestore';
import { _createUser } from '../user';
import { ITelegramWalletSubscriptionQuery } from './types';
import { _getTelegramWalletSubscription } from './getTelegramWallet';

export const _createTelegramWalletSubscription = async ({ address, ...telegramUser}: ITelegramWalletSubscriptionQuery) => {
  const store = await getFirestore();
  const walletSubscriptionsRef = store
    .collection('walletSubscriptions');
  
  const user = await _createUser(telegramUser);

  logger.log('  USER', user);

  if (!user) {
    return {};
  }

  const telegramSubscription = await _getTelegramWalletSubscription({ address });

  logger.log('  TG SUB', telegramSubscription);

  if (telegramSubscription) {
    return telegramSubscription;
  }

  const subscriptionId = uuidv4();
  const subscriptionDocRef = walletSubscriptionsRef.doc(subscriptionId);

  await subscriptionDocRef.set({
    ownerId: user?.ref,
    address,
  });

  return await _getTelegramWalletSubscription({ address });
};

export const createTelegramWalletSubscription = onCall({}, async (req) => {
  return await _createTelegramWalletSubscription(req.data);
});
