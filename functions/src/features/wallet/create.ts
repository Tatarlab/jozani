import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { Wallet } from '../../entities';
import { pick } from 'lodash';
import { Currency, CurrencyNetwork } from './types';

export const createWallet = onCall({}, async (req) => {
  const {
    currency = Currency.USDT,
    network = CurrencyNetwork.TRC20,
  } = pick(req.data, ['currency', 'network']);

  // connect firestore
  const store = await getFirestore();

  // init wallet
  const walletInstance = new Wallet(currency);
  const wallet = await walletInstance.create();
  const walletAddress = walletInstance.getAddress();

  const createdAt = new Date();

  // insert firestore
  await store
    .collection('wallets')
    .doc(walletAddress)
    .set({
      privateKey: wallet.privateKey,
      network,
      address: walletAddress,
      balance: 0,
      createdAt,
      updatedAt: createdAt,
    });

  return {
    address: walletAddress,
  };
});
