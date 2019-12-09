import { Component, OnInit } from '@angular/core';
import {CartService} from '../shared/services/cart-service/cart.service';
import {Product} from '../shared/models/product';
import {ProductQuantity} from '../shared/models/productQuantity';
import {ProductService} from '../shared/services/product-service/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  currentProducts: ProductQuantity[];
  subTotal = 0;
  shippingAndHandling = 10;
  tax = 0;
  total = 0;
  constructor(private cartService: CartService, private productService: ProductService) {
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
    this.cartService.removeProduct(product);
    this.currentProducts = this.currentProducts.filter( p => p !== product);
  }
  formatSum(i: number): number {
    return Math.round(i * 100) / 100;
  }
  calculateTotal() {
    this.total = this.formatSum(this.cartService.currentCartPrice + this.shippingAndHandling + this.tax);
    return this.total;
  }
  calculateSubTotal() {
   this.subTotal = this.formatSum(this.cartService.currentCartPrice);
   return this.subTotal;
  }
}
