import {User} from './user';
import {Address} from './address';
import {Product} from './product';

export interface Order {
  id: number;
  user: User;
  total: number;
  address: Address;
  products: Product[];
}
