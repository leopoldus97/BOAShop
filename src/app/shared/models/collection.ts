import {Product} from './product';

export interface Collection {
  id: number;
  name: string;
  products: Product[];
}
