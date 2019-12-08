import { Component, OnInit } from '@angular/core';
import {CartService} from '../shared/services/cart-service/cart.service';
import {Product} from '../shared/models/product';
import {ProductQuantity} from '../shared/models/productQuantity';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  currentProducts: ProductQuantity[];

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.currentProducts = this.cartService.currentCart;
  }

  sumForProduct(product: ProductQuantity) {
    if (product.quantity > 99) {
      product.quantity = 99;
      product.sum = this.formatSum(product.quantity * product.product.price);
    } else  {
      product.sum = this.formatSum(product.quantity * product.product.price);
    }
    this.cartService.calculateTotal();
  }
  removeProduct(product: ProductQuantity) {
    product.quantity = -100;
    this.cartService.removeProduct(product);
  }
  formatSum(i: number): number {
    return Math.round(i * 100) / 100;
  }
}
