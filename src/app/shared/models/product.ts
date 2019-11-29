import {Collection} from './collection';

export interface Product {
  id: number;
  name: string;
  type: string;
  gender: string;
  price: number;
  size: string;
  pictureUrl: string;
  availableQuantity: number;
  discountPrice: number;
  collection: Collection;
  description: string;
}
