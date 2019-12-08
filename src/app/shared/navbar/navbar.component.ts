import {Component, NgZone, OnInit} from '@angular/core';
import {ProductService} from '../services/product-service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CollectionService} from '../services/collection-service/collection.service';
import {Collection} from '../models/collection';
import {CartService} from '../services/cart-service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {
  searchItem: string;
  itemList: [string, string, string, string, string, string, string];
  collections: Collection[];
  constructor(private productService: ProductService,
              private router: Router,
              private collectionService: CollectionService,
              private cartService: CartService) {}

    ngOnInit() {
    this.getCollections();
    this.searchItem = '';
    this.itemList = [
      'T-Shirts',
      'Hoodies And Sweatshirts',
      'Accessories',
      'Tops',
      'Dresses And Skirts',
      'Sportswear',
      'Swimwear'
    ];
  }
  setFilter(specification: string, routeTail: string, properType: string) {
    this.productService.setFilter(specification, properType);
    this.router.navigateByUrl('products' + routeTail);
  }
  private getCollections() {
    this.collectionService.getCollections().subscribe(
      collections => {this.collections = collections; });
  }
  search() {
    if (this.searchItem.trim() !== '') {
      const itemType = this.itemList.find( e => e.toLowerCase().includes(this.searchItem.toLowerCase()));
      const spec = 'type=' + itemType;
      const routeTail = itemType.replace(' ', '-');
      this.productService.setFilter(spec, itemType);
      this.router.navigateByUrl('/products/' + routeTail);
    } else {
      this.productService.setFilter('', 'Available Products');
      this.router.navigateByUrl('/products');
    }
  }
}
