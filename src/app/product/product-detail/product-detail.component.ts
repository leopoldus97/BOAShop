import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../shared/services/product-service/product.service';
import {Product} from '../../shared/models/product';
import {ProductQuantity} from '../../shared/models/productQuantity';
import {CartService} from '../../shared/services/cart-service/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  productQuantity: ProductQuantity = {id: 1, quantity: 1, product: null, size: 'M', sum: 0 };
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ProductService,
              private cartService: CartService) { }

  ngOnInit() {
    this.getProductByID();
  }
  getProductByID() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getProductByID(id).subscribe(product => this.product = product);
  }
  addToCart() {
    if (this.productQuantity.quantity > 0 && this.productQuantity.quantity <= 100) {
      this.productQuantity.id = this.cartService.availableID();
      this.productQuantity.product = this.product;
      this.productQuantity.sum = (this.productQuantity.quantity * this.product.price);
      this.cartService.addProduct(this.productQuantity);
      this.setDefault(this.productQuantity.size);
      //this.function();
    } else {
      // To-Do Popup with information that wrong input was  provided
      this.productQuantity.quantity = 1;
    }
  }
  setSize(size: string) {
    this.productQuantity.size = size;
  }
  setDefault(Size: string) {
    this.productQuantity = {id: 1, quantity: 1, product: null, size: Size, sum: 0 };
  }
  function() {
    //$('#frameModalBottom').modal('toggle');
    //document.getElementById('frameModalBottom').hidden = false;
  }
}
