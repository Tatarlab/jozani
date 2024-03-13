import { v4 as uuidv4 } from 'uuid';
import { onCall } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';
import { getFirestore } from 'firebase-admin/firestore';
import { _createUser } from '../user';
import { ITelegramChallengeSubscriptionQuery } from './types';
import { _getTelegramChallengeSubscription } from './getTelegramChallenge';
import { _getChallenge } from '../challenge';

export const _createTelegramChallengeSubscription = async ({ slug, ...telegramUser}: ITelegramChallengeSubscriptionQuery) => {
  const store = await getFirestore();
  const challengeSubscriptionsRef = store
    .collection('challengeSubscriptions');
  
  const user = await _createUser(telegramUser);

  logger.log('  USER', user);

  if (!user) {
    return {};
  }

  const telegramSubscription = await _getTelegramChallengeSubscription({ slug });

  logger.log('  TG SUB', telegramSubscription);

  if (telegramSubscription) {
    return telegramSubscription;
  }

  const subscriptionId = uuidv4();
  const subscriptionDocRef = challengeSubscriptionsRef.doc(subscriptionId);

  const challenge = await _getChallenge({ id: slug });

  await subscriptionDocRef.set({
    ownerId: user?.ref,
    challengeId: challenge,
  });

  return await _getTelegramChallengeSubscription({ slug });
};

export const createTelegramChallengeSubscription = onCall({}, async (req) => {
  return await _createTelegramChallengeSubscription(req.data);
});
