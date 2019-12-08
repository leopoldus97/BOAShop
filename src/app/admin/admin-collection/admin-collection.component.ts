import { Component, OnInit } from '@angular/core';
import {Collection} from '../../shared/models/collection';
import {Product} from '../../shared/models/product';
import {ProductService} from '../../shared/services/product-service/product.service';
import {CollectionService} from '../../shared/services/collection-service/collection.service';
import {ActivatedRoute, Router} from '@angular/router';
import {forEachComment} from 'tslint';

@Component({
  selector: 'app-admin-collection',
  templateUrl: './admin-collection.component.html',
  styleUrls: ['./admin-collection.component.scss']
})
export class AdminCollectionComponent implements OnInit {

  collection: Collection  = {id: 0, name: '', products: []};
  collProduct: Product;
  allProducts: Product[];
  displayProducts = false;
  alreadyAdded: number[] = [];
  constructor(
    private proSer: ProductService,
    private colSer: CollectionService,
    private router: Router
    ) { }

  ngOnInit() {
    this.initProduct()
    this.proSer.getProducts().subscribe(data => this.allProducts = data);
  }

  showProducts() {
    this.collProduct.id = this.allProducts[0].id;
    this.displayProducts = true;
    document.getElementById('addButton').hidden = true;
  }
  transfer() {
    const prod = this.alreadyAdded.some(productID => productID === this.collProduct.id);
    if (prod === false && this.collProduct.id !== 0) {
      this.collection.products.push(this.collProduct);
      this.alreadyAdded.push(this.collProduct.id);
      this.initProduct();
    }
  }
  save() {
    this.colSer.createCollection(this.collection).subscribe(() => this.router.navigateByUrl('/admin'));
  }

  setID() {
    const e = (document.getElementById('select')) as HTMLSelectElement;
    const sel = e.selectedIndex;
    const opt = e.options[sel];
    const CurValue = (opt as unknown as HTMLSelectElement).value;
    const valueAsNumber = Number(CurValue);
    this.collProduct.id = valueAsNumber;
  }
  initProduct() {
    this.collProduct = {
      id: 0,
      availableQuantity: 0,
      collection: null,
      description: '',
      discountPrice: 0,
      gender: '',
      name: '',
      pictures: [],
      price: 0,
      sizeQuantity: null,
      type: ''
    };
  }
}
