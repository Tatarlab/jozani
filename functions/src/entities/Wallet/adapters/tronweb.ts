import { get } from 'lodash';
import { IWalletAdapter, IWalletTransaction } from '../../types';
import { Currency } from '../../../features/wallet/types';

/* eslint-disable @typescript-eslint/no-var-requires */
const TronWebOrigin = require('tronweb');
const TronGridOrigin = require('trongrid');

// export const TRX_FULL_NODE = 'https://api.trongrid.io';
// export const TRX_SOLIDITY_NODE = 'https://api.trongrid.io';
// export const TRX_EVENT_SERVER = 'https://api.trongrid.io';
export const TRX_FULL_NODE = 'https://nile.trongrid.io/';
export const TRX_SOLIDITY_NODE = 'https://nile.trongrid.io/';
export const TRX_EVENT_SERVER = 'https://nile.trongrid.io/';

// export const USDT_TRC20_ADDRESS = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
export const USDT_TRC20_ADDRESS = 'TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj';

export class TronWeb extends TronWebOrigin {
  constructor(privateKey?: string) {
    super(
      TRX_FULL_NODE,
      TRX_SOLIDITY_NODE,
      TRX_EVENT_SERVER,
      privateKey,
    );
  }
}

export const getTRXWalletAdapter = (): IWalletAdapter => ({
  create: async (privateKey) => new TronWeb(
    privateKey,
  ).createAccount(),
  getAddress: (wallet) => get(wallet, 'address.base58', ''),
  getBalance: async (address) => {
    const tronWeb = new TronWeb();

    tronWeb.setAddress(address);
    const contract = await tronWeb.contract().at(USDT_TRC20_ADDRESS);
    const balance = await contract.balanceOf(address).call();

    return tronWeb.toDecimal(balance._hex);
  },
  getTransactionsTo: async (address) => {
    const tronWeb = new TronWeb();
    const tronGrid = new TronGridOrigin(tronWeb);

    tronWeb.setDefaultBlock('latest');
    tronWeb.setAddress(address);

    const res = await tronGrid.account.getTrc20Transactions(address, {
      onlyConfirmed: true,
      onlyTo: true,
      limit: 50,
      order_by: 'block_timestamp,asc',
    });

    const txs = res.data.reduce((acc: IWalletTransaction[], tx: any) => {
      const txID = get(tx, 'transaction_id', '');
      const tokenSymbol = get(tx, 'token_info.symbol', '');
      const amount = +get(tx, 'value', 0);
      const timestamp = get(tx, 'block_timestamp', 0);

      if (tokenSymbol === Currency.USDT) {
        acc.push({
          txID, tokenSymbol, amount, timestamp,
        });
      }

      return acc;
    }, []);

    return txs;
  },
});
