/* eslint-disable @typescript-eslint/no-var-requires */
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { Wallet } from '../../entities';
import { first, last, pick } from 'lodash';
import { Currency } from './types';
import { _createPayment } from '../payment';
import { _getIncomes } from '../payment/getIncomes';

export const getBalanceWallet = onCall({}, async (req) => {
  const {
    address,
    currency = Currency.USDT,
  } = pick(req.data, ['address', 'currency']);

  // connect firestore
  const store = await getFirestore();
  const walletsRef = store.collection('wallets');
  const challengesRef = store.collection('challenges');

  const walletDocRef = walletsRef.doc(address);

  const walletInstance = new Wallet(currency);
  const balance = await walletInstance
    .getBalance(address);

  // exit if zero balance
  if (balance <= 0) {
    return {
      balance,
      prevBalance: 0,
      lastIncome: null,
    };
  }

  const lastIncomesOrigin = await walletInstance.getTransactionsTo(address);
  const lastIncomeOrigin = last(lastIncomesOrigin);

  const lastIncomes = await _getIncomes({ address, currency });
  const lastIncome = last(lastIncomes);
  let lastIncomeData = lastIncome?.data();
  const updatedAt = new Date();

  // create payment record if not exists
  let hasLastIncomeBound = false;
  // eslint-disable-next-line max-len
  const isLastIncomesEqual = lastIncomeOrigin?.amount === lastIncomeData?.amount;

  if (isLastIncomesEqual) {
    // check payment boundary to challenge
    const challengesQuerySnapshot = await challengesRef
      .where('paymentId', '==', lastIncome?.ref)
      .limit(1)
      .get();

    hasLastIncomeBound = !!first(challengesQuerySnapshot.docs
      .map((doc) => doc.data()));
  } else {
    lastIncomeData = await _createPayment({ address, currency });

    // update wallet
    walletDocRef.set({
      balance,
      updatedAt,
    });
  }

  // allow to bound payment with challenge
  if (lastIncomeData && !hasLastIncomeBound) {
    return {
      isLastIncomeConfirmed: !hasLastIncomeBound,
      balance,
      lastIncome,
    };
  }

  return {
    balance,
    lastIncome,
  };
});
