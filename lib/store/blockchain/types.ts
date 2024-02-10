export interface IBlockchainState {
  currency: Currency;
  network: CurrencyNetwork;
  walletAddress: string;
  walletAddressDataURL: string;
}

export enum Currency {
  BTC = 'BTC',
  ETH = 'ETH',
  USDT = 'USDT'
}

export enum CurrencyNetwork {
  ERC20 = 'ERC20',
  TRC20 = 'TRC20',
}

  
export interface IBlockchainMethods {
  getWalletAddress(): Promise<string>;
}

export type IBlockchainStore = IBlockchainState & IBlockchainMethods;