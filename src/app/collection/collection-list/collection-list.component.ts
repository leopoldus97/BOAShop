import { Component, OnInit } from '@angular/core';
import {Collection} from '../../shared/models/collection';
import {CollectionService} from '../../shared/services/collection.service';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit {
  collections: Collection[];
  constructor(private collectionService: CollectionService, private productService: ProductService) { }

  ngOnInit() {
    this.getCollections();
  }

  private getCollections() {
    this.collectionService.getCollections().subscribe(
      collections => {this.collections = collections; });
  }
}
