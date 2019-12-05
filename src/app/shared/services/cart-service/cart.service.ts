import { Injectable } from '@angular/core';
import {Product} from '../../models/product';
import {ProductQuantity} from '../../models/productQuantity';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  currentCart: Array<ProductQuantity> = [];
  id = 1;
  constructor() { }
  getProducts(): ProductQuantity[] {
    if (this.currentCart.length > 0) {
    return this.currentCart;
    } else {
  return null;
}
  }
  removeProduct(toDelete: ProductQuantity) {
    this.currentCart = this.currentCart.filter( p => p !== toDelete);
  }
  addProduct(toAdd: ProductQuantity) {
    if (this.currentCart === null) {
    this.currentCart = [toAdd];
    } else {
     this.currentCart.push(toAdd);
    }
  }
  updateProducts(updated: ProductQuantity[]) {
    this.currentCart = updated;
  }
  availableID(){
    this.id++;
    return this.id;
  }
}
