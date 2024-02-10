import { create } from 'zustand';
import { pick } from 'lodash';
import { devtools } from 'zustand/middleware';
import { IBlockchainStore } from './types';
import { INITIAL_STATE, WALLET_ADDRESS_KEY } from './constants';
import { LocalStorage } from '../../domains';
import { getFirebaseCallable } from '../../../entities/firebase';

export const useBlockchain = create<IBlockchainStore>()(devtools((set, get) => ({
  ...INITIAL_STATE,

  getWalletAddress: async () => {
    const { currency } = get();
    const localStorage = new LocalStorage();
    const localWalletAddress = localStorage.get(WALLET_ADDRESS_KEY);

    const getQrCode = getFirebaseCallable('getQrCode');

    if (localWalletAddress) {
      const { data: dataURL } = await getQrCode({ address: localWalletAddress });
      set({ walletAddress: localWalletAddress, walletAddressDataURL: dataURL as string });

      return localWalletAddress;
    }

    const createWalletAddress = getFirebaseCallable('createWallet');
    
    const { data } = await createWalletAddress(currency);
    const { address } = pick(data, ['address']);
    const { data: dataURL } = await getQrCode({ address });

    localStorage.set(WALLET_ADDRESS_KEY, address);
    set(({ walletAddress: address, walletAddressDataURL: dataURL as string }));

    return address;
  },
})))