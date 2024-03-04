import { pick } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { Currency } from '../wallet';
import { ICreatePayment, PaymentType } from './types';
import { _getPaymentIncome } from './getIncome';

export const _createPaymentIncome = async (data: ICreatePayment) => {
  const {
    currency = Currency.USDT,
    address,
    transactionId,
    amount,
  } = pick(data, ['address', 'currency', 'transactionId', 'amount']);

  const store = await getFirestore();
  const paymentsRef = store
    .collection('payments');

  const paymentIncome = await _getPaymentIncome({ transactionId });

  if (paymentIncome) {
    return paymentIncome;
  }

  const createdAt = new Date();
  const paymentId = uuidv4();

  const paymentDocRef = paymentsRef.doc(paymentId);

  // insert firestore payment
  await paymentDocRef.set({
    type: PaymentType.Income,
    incomeWalletAddress: address,
    transactionId,
    amount,
    currency,
    createdAt,
    updatedAt: createdAt,
  });

  return (await paymentDocRef.get());
};

export const createPaymentIncome = onCall({}, async (req) => {
  return await _createPaymentIncome(req.data);
});
