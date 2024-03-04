import { first, pick } from 'lodash';
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { IPaymentQuery } from './types';

type IncomeQuery = Pick<IPaymentQuery, 'transactionId' | 'id'>;

export const _getPaymentIncome = async (data: IncomeQuery) => {
  const {
    id,
    transactionId,
  } = pick(data, ['id', 'transactionId']);

  const store = await getFirestore();
  const paymentsRef = store
    .collection('payments');

  let paymentDocRef;
  if (id) {
    paymentDocRef = await paymentsRef
      .doc(id)
      .get();
  } else {
    const paymentsQuerySnapshot = await paymentsRef
      .where('transactionId', '==', transactionId)
      .limit(1)
      .get();
    paymentDocRef = first(paymentsQuerySnapshot.docs);
  }

  return paymentDocRef;
};

export const getPaymentIncome = onCall({}, async (req) => {
  return await _getPaymentIncome(req.data);
});
