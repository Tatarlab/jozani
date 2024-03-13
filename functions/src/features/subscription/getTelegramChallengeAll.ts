import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { IUserQuery, _createUser, _getUser } from '../user';
import { _getChallenge } from '../challenge';

export const _getTelegramChallengeAllSubscriptions = async ({ telegramId }: Pick<IUserQuery, 'telegramId'>) => {
  const store = await getFirestore();
  const challengeSubscriptionsRef = store
    .collection('challengeSubscriptions');
  
  const userDoc = await _getUser({ telegramId });

  const subscriptionsQuerySnapshot = await challengeSubscriptionsRef
    .where('ownerId', '==', userDoc?.ref)
    .orderBy('ownerId', 'desc')
    .get();

  return subscriptionsQuerySnapshot.docs;
};

export const getTelegramChallengeAllSubscriptions = onCall({}, async (req) => {
  return await _getTelegramChallengeAllSubscriptions(req.data);
});
