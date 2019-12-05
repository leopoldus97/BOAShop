import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product-service/product.service';
import {Product} from '../../shared/models/product';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  allProducts: Product[];

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getProducts().subscribe(listOfProducts => this.allProducts = listOfProducts);
  }

}
