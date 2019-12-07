import { Component, OnInit } from '@angular/core';
import {Collection} from '../../shared/models/collection';
import {Product} from '../../shared/models/product';
import {ProductService} from '../../shared/services/product-service/product.service';
import {CollectionService} from '../../shared/services/collection-service/collection.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-collection',
  templateUrl: './admin-collection.component.html',
  styleUrls: ['./admin-collection.component.scss']
})
export class AdminCollectionComponent implements OnInit {

  collection: Collection;
  products: Product[];
  allProducts: Product[];

  constructor(
    private proSer: ProductService,
    private colSer: CollectionService,
    private router: Router
    ) { }

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

  test() {
    for (const p of this.products) {
      this.proSer.getProductByID(p.id).subscribe(data => this.collection.products.push(data) );
    }
  }

  save() {
    debugger;
    this.colSer.createCollection(this.collection).subscribe(() => this.router.navigateByUrl('/admin'));
  }

}
