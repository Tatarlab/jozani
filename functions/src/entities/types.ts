import { Currency } from '../features';

export interface IWalletAdapter {
  create(privateKey: string): Promise<unknown>;
  getAddress(walletInstance: unknown): string;
  getBalance(address: string): Promise<number>;
  getTransactionsTo(address: string): Promise<IWalletTransaction[]>;
}

export type WalletTransactionStatus = 'PROCESSING' | 'SUCCESS' | 'FAILED';

export interface IWalletTransaction {
  txID: string;
  tokenSymbol: Currency;
  amount: number;
  timestamp: number;
}
