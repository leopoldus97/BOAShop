import { Component, OnInit } from '@angular/core';
import {CollectionService} from '../shared/services/collection-service/collection.service';
import {Collection} from '../shared/models/collection';
import {ProductService} from '../shared/services/product-service/product.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  private collection: Collection;

  constructor(private collectionService: CollectionService, private productService: ProductService, private router: Router) {}
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.collectionService.getCollections().subscribe( col => this.collection = col[0] );
  }
  setFilter(specification: string, routeTail: string, properType: string) {
    this.productService.resetFilterToDefault();
    this.productService.setFilter(specification, properType);
    this.router.navigateByUrl('products' + routeTail);
  }
}
