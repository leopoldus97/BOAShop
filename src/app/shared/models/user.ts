import {Address} from './address';
import {Order} from './order';

export interface User {
  id: number;
  email: string;
  isAdmin: boolean;
  address: Address;
  orders: Order[];
}
