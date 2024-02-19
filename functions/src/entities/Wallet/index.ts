import * as crypto from 'crypto';
import { IWalletAdapter } from '../types';
import { Currency, CurrencyNetwork } from '../../features';
import { getAdapter } from './helpers';

class Wallet {
  static generatePrivateKey = () => crypto.randomBytes(32).toString('hex');

  public adapter!: IWalletAdapter;
  public wallet: any;

  constructor(
    public currency: Currency = Currency.USDT,
    public network: CurrencyNetwork = CurrencyNetwork.TRC20,
  ) {
    this.adapter = getAdapter(currency);
  }

  create = async () => {
    this.wallet = await this.adapter.create(Wallet.generatePrivateKey());

    return this.wallet;
  };

  getAddress = () => this.adapter.getAddress(this.wallet);

  getBalance = (address: string) => this.adapter.getBalance(address);

  getTransactionsTo = (
    address: string,
  ) => this.adapter.getTransactionsTo(address);
}

export default Wallet;
