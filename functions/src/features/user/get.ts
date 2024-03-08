import { first, pick } from 'lodash';
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { IUserQuery } from './types';

export const _getUser = async (data: Partial<IUserQuery>) => {
  const {
    id,
    telegramId,
  } = pick(data, ['id', 'telegramId']);

  const store = await getFirestore();
  const usersRef = store
    .collection('users');

  let userDocRef;
  if (id) {
    userDocRef = await usersRef
      .doc(id)
      .get();
  } else {
    const usersQuerySnapshot = await usersRef
      .where('telegramId', '==', telegramId)
      .limit(1)
      .get();
      userDocRef = first(usersQuerySnapshot.docs);
  }

  return userDocRef;
};

export const getUser = onCall({}, async (req) => {
  return await _getUser(req.data);
});
