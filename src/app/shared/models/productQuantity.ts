import {Product} from './product';

export interface ProductQuantity {
  id: number;
  product: Product;
  size: string;
  quantity: number;
}
