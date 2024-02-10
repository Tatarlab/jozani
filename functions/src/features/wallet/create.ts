import { onCall } from 'firebase-functions/v2/https';
import { getFirestore } from 'firebase-admin/firestore';
import { Wallet } from '../../entities';
import { pick } from 'lodash';
import { getAdapter } from './helpers';
import { Currency, CurrencyNetwork } from './types';

export const createWallet = onCall({}, async (req) => {
  const {
    currency = Currency.USDT,
    network = CurrencyNetwork.TRC20,
  } = pick(req.data, ['currency', 'network']);

  // connect firestore
  const store = await getFirestore();

  // init wallet w/ adapter
  const walletAdapter = getAdapter(currency);
  const walletInstance = new Wallet(walletAdapter);

  const wallet = await walletInstance.create();
  const walletAddress = walletInstance.getAddress();

  // insert firestore
  await store
    .collection('wallets')
    .doc(walletAddress)
    .set({
      privateKey: wallet.privateKey,
      network,
      address: walletAddress,
    });

  return {
    address: walletAddress,
  };
});
