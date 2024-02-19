import { Currency } from '../wallet';

export interface IPaymentQuery {
  address: string;
  currency: Currency;
  limit?: number;
}

export type ICreatePayment = IPaymentQuery;
