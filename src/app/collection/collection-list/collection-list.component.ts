import { Component, OnInit } from '@angular/core';
import {Collection} from '../../shared/models/collection';
import {CollectionService} from '../../shared/services/collection-service/collection.service';
import {ProductService} from '../../shared/services/product-service/product.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit {
  collections: Collection[];
  constructor(private router: Router, private collectionService: CollectionService, private productService: ProductService) { }

  ngOnInit() {
    this.getCollections();
  }

  private getCollections() {
    this.collectionService.getCollections().subscribe(
      collections => {this.collections = collections; });
  }
  setFilter(specification: string, routeTail: string, properType: string) {
    this.productService.setFilter(specification, properType);
    this.router.navigateByUrl(  'products' + routeTail);
  }
}
