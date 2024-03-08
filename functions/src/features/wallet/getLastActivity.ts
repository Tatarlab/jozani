/* eslint-disable @typescript-eslint/no-var-requires */
import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import * as logger from 'firebase-functions/logger';
import { Wallet } from '../../entities';
import { first, last, pick } from 'lodash';
import { Currency } from './types';
import { _createPaymentIncome } from '../payment';
import { _getPaymentIncomes } from '../payment/getIncomes';

export const getWalletLastActivity = onCall({}, async (req) => {
  try {
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
      .getBalance(address) / 1e6;

    logger.log('  BALANCE', balance);

    // exit if zero balance
    if (balance <= 0) {
      return {
        amount: 0,
        paymentId: null,
        transactionId: null,
      };
    }

    const lastIncomesOrigin = await walletInstance.getTransactionsTo(address);
    const lastIncomeOrigin = last(lastIncomesOrigin);

    logger.log('  LAST INCOME [ORIGIN]', lastIncomeOrigin);

    const lastIncomes = await _getPaymentIncomes({ address, currency });
    const lastIncome = first(lastIncomes);
    const lastIncomeData = lastIncome?.data();
    const updatedAt = new Date();

    logger.log('  LAST INCOME', lastIncomeData);

    // create payment record if not exists
    let hasLastIncomeBound = false;
    // eslint-disable-next-line max-len
    const isLastIncomesEqual = lastIncomeOrigin?.amount === lastIncomeData?.amount;
    const lastIncomePaymentId = lastIncome?.ref?.id;

    if (isLastIncomesEqual) {
      // check payment boundary to challenge
      const challengesQuerySnapshot = await challengesRef
        .where('paymentId', '==', lastIncome?.ref)
        .limit(1)
        .get();

      hasLastIncomeBound = challengesQuerySnapshot.docs.length > 0;
    } else {
      const lastPaymentIncome = await _createPaymentIncome({
        address,
        currency,
        transactionId: lastIncomeOrigin?.txID,
        amount: lastIncomeOrigin?.amount,
      });
      const lastPaymentIncomeData = lastPaymentIncome.data();

      // update wallet
      walletDocRef.set({
        balance,
        updatedAt,
      });

      return {
        isLastIncomeConfirmed: !!lastPaymentIncome,
        amount: lastPaymentIncomeData?.amount,
        transactionId: lastPaymentIncomeData?.transactionId,
        paymentId: lastPaymentIncome?.id,
      };
    }

    // allow to bound payment with challenge
    if (isLastIncomesEqual && !hasLastIncomeBound) {
      return {
        isLastIncomeConfirmed: !hasLastIncomeBound,
        amount: lastIncomeData?.amount,
        transactionId: lastIncomeData?.transactionId,
        paymentId: lastIncomePaymentId,
      };
    }

    // just return open info
    return {
      amount: lastIncomeOrigin?.amount,
      paymentId: null,
      transactionId: lastIncomeOrigin?.txID,
    };
  } catch (error) {
    logger.error(error);

    return {
      error,
    };
  }
});
