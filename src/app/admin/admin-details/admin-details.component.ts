import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../shared/models/product';
import {CollectionService} from '../../shared/services/collection.service';
import {Collection} from '../../shared/models/collection';
// import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.scss']
})
export class AdminDetailsComponent implements OnInit {

  product: Product;
  collections: Collection[];
  togCol = 0;

  constructor(
    private proSer: ProductService,
    private colSer: CollectionService,
    private route: ActivatedRoute,
    private router: Router
    // private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getProductByID();
    this.getCollections();
  }

  getProductByID() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.proSer.getProductByID(id).subscribe(product => { this.product = product; this.showCollection(); });
  }

  showCollection() {
    if (this.product.collection != null) {
      this.togCol = 1;
    } else {
      this.togCol = 0;
    }
  }

  addCollection() {
    this.product.collection = {id: 0, name: 'Default', products: null};
    this.togCol = 1;
  }

  removeCollection() {
    this.product.collection = null;
    this.togCol = 0;
  }

  updateProduct() {
    this.setCollection();
    this.proSer.updateProduct(this.product).subscribe(() => this.router.navigateByUrl('/admin'));
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
}
