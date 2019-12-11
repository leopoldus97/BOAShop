import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/services/product-service/product.service';
import {listenerCount} from "cluster";
import {Product} from '../shared/models/product';
import {CollectionService} from "../shared/services/collection-service/collection.service";
import {Collection} from "../shared/models/collection";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  private collection: Collection;

  constructor(private collectionService: CollectionService) {}
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.collectionService.getCollections().subscribe( col => this.collection = col[0] );
  }
}
