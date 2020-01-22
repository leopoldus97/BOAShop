import { Injectable } from '@angular/core';
import {Product} from '../../models/product';
import {ProductQuantity} from '../../models/productQuantity';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  currentCart: Array<ProductQuantity> = [];
  currentCartPrice = 0;
  id = 1;
  quantityExceeded = false;
  sizeExceeded = '';
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
    this.calculateTotal();
  }
  addProduct(toAdd: ProductQuantity) {
    if (this.currentCart === null) {
      this.currentCart = [toAdd];
    } else if (this.checkRepeatingProducts(toAdd)) {
      const p = this.currentCart.find(pr => pr.product.id === toAdd.product.id && pr.size === toAdd.size);
      if (p.quantity + toAdd.quantity < 100) {
        p.quantity += toAdd.quantity;
      } else {
        p.quantity = 99;
      }
    } else {
      this.currentCart.push(toAdd);
    }
    this.calculateTotal();
  }
  updateProducts(updated: ProductQuantity[]) {
    this.currentCart = updated;
  }
  availableID() {
    this.id++;
    return this.id;
  }
  checkRepeatingProducts(product: ProductQuantity) {
    if (this.currentCart.find(pr => pr.product.id === product.product.id && pr.size === product.size ) !== undefined) {
      return true;
    } else {
      return false;
    }
  }
  calculateTotal() {
    this.currentCartPrice = 0;
    for (const p of this.currentCart) {
      this.currentCartPrice += p.sum;
    }
  }
}
