import { Currency } from '../wallet';

export interface IPaymentQuery {
  id?: string;
  address: string;
  transactionId?: string;
  amount?: number;
  currency?: Currency;
  limit?: number;
}

export enum PaymentType {
  Income = 'INCOME',
  Outcome = 'OUTCOME',
}

export type ICreatePayment = IPaymentQuery;
