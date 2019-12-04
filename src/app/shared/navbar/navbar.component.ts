import {Component, NgZone, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CollectionService} from "../services/collection.service";
import {Collection} from "../models/collection";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {
  cartItems: number;
  collections: Collection[];
  constructor(private productService: ProductService, private router: Router, private collectionService: CollectionService) {}

    ngOnInit() {
    this.getCollections();
    this.cartItems = 2;
  }
  setFilter(specification: string, routeTail: string, properType: string) {
    this.productService.setFilter(specification, properType);
    this.router.navigateByUrl('products' + routeTail);
  }
  private getCollections() {
    this.collectionService.getCollections().subscribe(
      collections => {this.collections = collections; });
  }
}
