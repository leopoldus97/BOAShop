import {Collection} from './collection';
import {SizeQuantity} from './sizeQuantity';
import {Picture} from './picture';

export interface Product {
  id: number;
  name: string;
  type: string;
  gender: string;
  price: number;
  sizeQuantity: SizeQuantity[];
  pictures: Picture[];
  availableQuantity: number;
  discountPrice: number;
  collection: Collection;
  description: string;
}
