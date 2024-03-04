import { pick } from 'lodash';
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { IPaymentQuery } from './types';

export const _getPaymentIncomes = async (data: IPaymentQuery) => {
  const {
    address,
    limit = 5,
  } = pick(data, ['address', 'currency', 'limit']);

  const store = await getFirestore();
  const paymentsRef = store
    .collection('payments');
  const paymentsQuerySnapshot = await paymentsRef
    .where('incomeWalletAddress', '==', address)
    .orderBy('incomeWalletAddress', 'asc')
    .limit(limit)
    .get();

  return paymentsQuerySnapshot.docs;
};

export const getPaymentIncomes = onCall({}, async (req) => {
  return await _getPaymentIncomes(req.data);
});
