export enum Currency {
  BTC = 'BTC',
  ETH = 'ETH',
  USDT = 'USDT'
}

export enum CurrencyNetwork {
  ERC20 = 'ERC20',
  TRC20 = 'TRC20',
}

export interface IBlockchainState {
  currency: Currency;
  network: CurrencyNetwork;
  walletAddress: string;
  walletAddressDataURL: string;
  walletLastAmount: number;
  walletLastPaymentId?: string | null;
  walletLastTransactionId?: string | null;
}

export interface IBlockchainMethods {
  getWalletAddress(): Promise<string>;
  getWalletLastActivity(): Promise<{
    isLastIncomeConfirmed?: boolean;
    amount: number;
    paymentId?: string | null;
    transactionId?: string | null;
  }>;
}

export type IBlockchainStore = IBlockchainState & IBlockchainMethods;