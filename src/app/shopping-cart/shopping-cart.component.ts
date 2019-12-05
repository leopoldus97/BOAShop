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

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    this.currentProducts = this.cartService.currentCart;
  }
}
