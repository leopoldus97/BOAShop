import { Component, OnDestroy, OnInit } from '@angular/core';
import {Product} from '../../shared/models/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../shared/services/product-service/product.service';
import {Observable} from "rxjs";
import {ErrorHandlerService} from '../../shared/services/error-handler.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  name: string;
  errorMessage = '';
  constructor(private route: Router, private productService: ProductService, private activeRoute: ActivatedRoute, private errorHandler: ErrorHandlerService) {
    activeRoute.params.subscribe(val => {
      this.getProducts2();
    });
  }
  ngOnInit() {
      this.getProducts2();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(listOfProducts => {
          this.products = listOfProducts;
        }
      );
  }
  getProducts2() {
    this.errorMessage = '';
    this.productService.getProducts()
        .subscribe(
          listOfProducts => {
            this.products = listOfProducts;
          },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
            this.products = null;
          },
        );
    }
    productsInStock() {
    if (this.errorMessage === 'No products found.') {
      return true;
    } else { return false; }
    }
  isEmpty(str): boolean {
    return (!str || 0 === str.length);
  }
  }

