import { Component, OnDestroy, OnInit } from '@angular/core';
import {Product} from '../../shared/models/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../shared/services/product-service/product.service';
import {Observable} from "rxjs";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  name: string;
  errorMessage = '';
  currentPage = 1;
  noProductsAvailable = false;
  constructor(private route: Router, private productService: ProductService, private activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(val => {
      this.getProducts2();
    });
  }
  ngOnInit() {
      this.getProducts2();
  }
  getProducts2() {
    this.errorMessage = '';
    this.productService.getProducts()
        .subscribe(
          listOfProducts => {
            this.noProductsAvailable = false;
            this.products = listOfProducts;
          },
          (error) => {
            this.noProductsAvailable = true;
            this.products = null;
          },
        );
    }
    changePage(page: number) {
    this.currentPage += page;
    this.productService.setPaging(this.currentPage);
    this.getProducts2();
    }
  }

