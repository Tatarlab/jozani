import * as crypto from 'crypto';
import { IWalletAdapter } from './types';

class Wallet {
  static obtainPrivateKey = () => crypto.randomBytes(32).toString('hex');

  public wallet: any;

  constructor(public adapter: IWalletAdapter) {

  }

  create = async () => {
    this.wallet = await this.adapter.create(Wallet.obtainPrivateKey());

    return this.wallet;
  };

  getAddress = () => this.adapter.getAddress(this.wallet);

  getBalance = (address: string) => this.adapter.getBalance(address);

  getTransactionsTo = (
    address: string,
  ) => this.adapter.getTransactionsTo(address);
}

export default Wallet;
