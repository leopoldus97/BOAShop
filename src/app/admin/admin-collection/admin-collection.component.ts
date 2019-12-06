import { Component, OnInit } from '@angular/core';
import {Collection} from '../../shared/models/collection';
import {Product} from '../../shared/models/product';
import {ProductService} from '../../shared/services/product-service/product.service';

@Component({
  selector: 'app-admin-collection',
  templateUrl: './admin-collection.component.html',
  styleUrls: ['./admin-collection.component.scss']
})
export class AdminCollectionComponent implements OnInit {

  collection: Collection;
  products: Product[];
  allProducts: Product[];

  constructor(private proSer: ProductService) { }

  ngOnInit() {
    this.collection = {id: 0, name: '', products: []};
    this.products = [];
    this.proSer.getProducts().subscribe(data => this.allProducts = data);
  }

  addProduct() {
    this.products.push({
      availableQuantity: 0,
      collection: null,
      description: '',
      discountPrice: 0,
      gender: '',
      id: 0,
      name: '',
      pictures: [],
      price: 0,
      sizeQuantity: null,
      type: ''
    });
  }

  save() {

  }

}
