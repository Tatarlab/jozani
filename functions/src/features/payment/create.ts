import { last, pick } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { Wallet } from '../../entities';
import { Currency } from '../wallet';
import { ICreatePayment } from './types';

export const _createPayment = async (data: ICreatePayment) => {
  const {
    address,
    currency = Currency.USDT,
  } = pick(data, ['address', 'currency']);

  // connect firestore
  const store = await getFirestore();

  // init wallet w/ adapter
  const walletInstance = new Wallet(currency);

  const createdAt = new Date();

  const transactionsTo = await walletInstance.getTransactionsTo(address);
  const lastIncome = last(transactionsTo);

  const paymentId = uuidv4();

  // insert firestore payment
  const paymentDocRef = store
    .collection('payments')
    .doc(paymentId);

  await paymentDocRef.set({
    incomeWalletAddress: address,
    transactionId: lastIncome?.txID,
    amount: lastIncome?.amount,
    createdAt,
    updatedAt: createdAt,
  });

  return (await paymentDocRef.get()).data();
};

export const createPayment = onCall({}, async (req) => {
  return await _createPayment(req.data);
});
