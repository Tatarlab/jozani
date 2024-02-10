import { Currency, CurrencyNetwork, IBlockchainState } from './types';

export const INITIAL_STATE: IBlockchainState = {
  currency: Currency.USDT,
  network: CurrencyNetwork.TRC20,
  walletAddress: '',
  walletAddressDataURL: '',
};

export const WALLET_ADDRESS_KEY = 'WALLET_ADDRESS';