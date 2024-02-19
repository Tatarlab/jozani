import { pick } from 'lodash';
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { IPaymentQuery } from './types';

export const _getIncomes = async (data: IPaymentQuery) => {
  const {
    address,
    limit = 5,
  } = pick(data, ['address', 'currency', 'limit']);

  // connect firestore
  const store = await getFirestore();

  // insert firestore payment
  const paymentsRef = store
    .collection('payments');
  const paymentsQuerySnapshot = await paymentsRef
    .where('incomeWalletAddress', '==', address)
    // .orderBy('createdAt', 'desc')
    .limit(limit)
    .get();

  return paymentsQuerySnapshot.docs;
};

export const getIncomes = onCall({}, async (req) => {
  return await _getIncomes(req.data);
});
