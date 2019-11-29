import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/models/product';
import {Router} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  name: string;
  constructor(private route: Router, private service: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.service.getProducts().subscribe(listOfProducts => this.products = listOfProducts);
  }

}
