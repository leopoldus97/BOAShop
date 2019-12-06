import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/models/product';
import {ProductService} from '../../shared/services/product-service/product.service';
import {CollectionService} from '../../shared/services/collection-service/collection.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Collection} from '../../shared/models/collection';
import {Picture} from '../../shared/models/picture';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.scss']
})
export class AdminCreateComponent implements OnInit {

  product: Product;
  togCol = 0;
  collections: Collection[];
  defaultPicture: Picture[];

  constructor(
    private proSer: ProductService,
    private colSer: CollectionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCollections();
    this.product = {
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
    };
    this.defaultPicture = [{
      id: 0,
      pictureLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfYB0naXqmF8fXBIAzHgHf8poex_0dQCkIgtVNJKxcFQfnidB&s'
    }];
  }

  addCollection() {
    this.product.collection = {id: 0, name: 'Default', products: null};
    this.togCol = 1;
  }

  removeCollection() {
    this.product.collection = null;
    this.togCol = 0;
  }

  getCollections() {
    this.colSer.getCollections().subscribe(data => this.collections = data);
  }

  setCollection() {
    if (this.product.collection != null) {
      if (this.product.collection.id === 0) {
        this.product.collection = null;
      } else {
        this.colSer.getCollectionByID(this.product.collection.id).subscribe(data => this.product.collection = data);
      }
    } else {
      this.product.collection = null;
    }
  }

  save() {
    this.product.pictures = this.defaultPicture;
    this.setCollection();
    this.proSer.createProduct(this.product).subscribe(() => this.router.navigateByUrl('/admin'));
  }

}
