import { pick } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { _getUser } from './get';
import { ITelegramUserQuery } from './types';

export const _createUser = async (data: ITelegramUserQuery) => {
  const user = pick(data, ['username', 'firstName', 'lastName', 'id']);
  const {
    username,
    firstName,
    lastName,
    id: telegramId,
  } = user;

  const store = await getFirestore();
  const usersRef = store
    .collection('users');
  const userId = uuidv4();
  const userDocRef = usersRef.doc(userId);

  const existingUser = await _getUser({ telegramId });

  if (existingUser) {
    return existingUser;
  }

  await userDocRef.set({
    username,
    lastName,
    firstName,
    telegramId,
  });

  return await _getUser({ telegramId });;
};

export const createUser = onCall({}, async (req) => {
  return await _createUser(req.data);
});
