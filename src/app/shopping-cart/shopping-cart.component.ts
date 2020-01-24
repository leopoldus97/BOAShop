import { Component, OnInit } from '@angular/core';
import {CartService} from '../shared/services/cart-service/cart.service';
import {Product} from '../shared/models/product';
import {ProductQuantity} from '../shared/models/productQuantity';
import {ProductService} from '../shared/services/product-service/product.service';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {ModalComponent} from '../shared/modal/modal.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  modalRef: MDBModalRef;
  cartProducts: ProductQuantity[];
  allProducts: Product[];
  subTotal = 0;
  shippingAndHandling = 10;
  tax = 0;
  total = 0;
  constructor(private cartService: CartService, private productService: ProductService, private modalService: MDBModalService) {
  }

  ngOnInit() {
    this.loadCartProducts();
    this.loadProducts();
  }

  loadCartProducts() {
    this.cartProducts = this.cartService.currentCart;
  }

  private loadProducts() {
    this.productService.getProducts().subscribe( products => {
    this.allProducts = products;
    this.checkAvailabilityInDB(this.cartProducts);
  });
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
    this.cartProducts = this.cartProducts.filter(p => p !== product);
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
  openModal() {
    this.modalRef = this.modalService.show(ModalComponent);
  }
  checkAvailabilityInDB(cartProducts: ProductQuantity[]) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < cartProducts.length; i++) {
      const cartProd = cartProducts[i];
      const productInDb = this.allProducts.find( p => p.id === cartProd.product.id);
      const productSizeInDb = productInDb.sizeQuantity.find( ps => ps.size === cartProd.size);
      if (cartProd.quantity > productSizeInDb.quantity) {
        cartProd.quantity = productSizeInDb.quantity;
        this.cartService.updateProduct(cartProd);
        this.loadCartProducts();
        this.sumForProduct(cartProd);
        this.cartService.quantityExceeded = true;
        this.cartService.sizeExceeded += cartProd.product.name + '(' + cartProd.size + ')' + ', ';
      }
    }
    if (this.cartService.quantityExceeded) {
      this.openModal();
    }
  }

}
