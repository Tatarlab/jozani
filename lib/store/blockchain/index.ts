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

    try {
      const getQrCode = getFirebaseCallable('getQrCode');

      if (localWalletAddress) {
        const { data: dataURL } = await getQrCode({ address: localWalletAddress });
        set({ walletAddress: localWalletAddress, walletAddressDataURL: dataURL as string });

        return localWalletAddress;
      }

      const createWalletAddress = getFirebaseCallable('createWallet');
      
      const { data } = await createWalletAddress(currency);
      const { address } = pick<any>(data, ['address']);
      const { data: dataURL } = await getQrCode({ address });

      localStorage.set(WALLET_ADDRESS_KEY, address);
      set(({ walletAddress: address, walletAddressDataURL: dataURL as string }));

      return address;
    } catch (err) {
      console.error(`getWalletAddress: ${err}`);

      return '';
    }
  },

  getWalletBalance: async () => {
    const { walletAddress } = get();

    const getWBalanceWallet = getFirebaseCallable('getBalanceWallet');
    
    try {
      const { data } = await getWBalanceWallet({ address: walletAddress });
      const {
        isLastIncomeConfirmed = false,
        balance,
        lastIncome,
      } = pick<any>(data, ['isLastIncomeConfirmed', 'balance', 'lastIncome']);
  
      if (isLastIncomeConfirmed) {
        set({ walletBalance: balance });
      }
  
      set({ walletLastIncome: lastIncome });
  
      return {
        isLastIncomeConfirmed,
        balance,
      };
    } catch (err) {
      console.error(`getWalletBalance: ${err}`);

      return {
        isLastIncomeConfirmed: false,
        balance: 0,
      };
    }    
  },
})))