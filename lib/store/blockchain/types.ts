export enum Currency {
  BTC = 'BTC',
  ETH = 'ETH',
  USDT = 'USDT'
}

export enum CurrencyNetwork {
  ERC20 = 'ERC20',
  TRC20 = 'TRC20',
}

export interface IWalletTransaction {
  txID: string;
  tokenSymbol: Currency;
  amount: number;
  timestamp: number;
}

export interface IBlockchainState {
  currency: Currency;
  network: CurrencyNetwork;
  walletAddress: string;
  walletAddressDataURL: string;
  walletBalance: number;
  walletLastIncome?: IWalletTransaction | null;
}

  
export interface IBlockchainMethods {
  getWalletAddress(): Promise<string>;
  getWalletBalance(): Promise<{
    isChanged: boolean;
    balance: number;
    prevBalance: number;
  }>;
}

export type IBlockchainStore = IBlockchainState & IBlockchainMethods;