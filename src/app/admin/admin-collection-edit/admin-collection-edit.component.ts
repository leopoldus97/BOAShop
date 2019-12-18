import { Component, OnInit } from '@angular/core';
import {CollectionService} from '../../shared/services/collection-service/collection.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../shared/services/product-service/product.service';
import {Product} from '../../shared/models/product';
import {Collection} from '../../shared/models/collection';

@Component({
  selector: 'app-admin-collection-edit',
  templateUrl: './admin-collection-edit.component.html',
  styleUrls: ['./admin-collection-edit.component.scss']
})
export class AdminCollectionEditComponent implements OnInit {

  collection: Collection;
  collProduct: Product;
  allProducts: Product[];
  displayProducts = false;
  alreadyAdded: number[] = [];
  constructor(
    private proSer: ProductService,
    private colSer: CollectionService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    document.getElementById('btn-all-products').setAttribute('style', '');
    document.getElementById('btn-add-product').setAttribute('style', '');
    document.getElementById('btn-new-collection').setAttribute('style', '');
    document.getElementById('btn-collection-list').setAttribute('style', '');
    this.initProduct();
    this.proSer.getProducts().subscribe(data => this.allProducts = data);
    this.getCollectionByID();
  }

  getCollectionByID() {
    const id = this.route.snapshot.paramMap.get('id');
    this.colSer.getCollectionByID(id).subscribe(data => { this.collection = data; this.updateAlreadyAdded(); } );
  }

  updateAlreadyAdded() {
    for (const p of this.collection.products) {
      this.alreadyAdded.push(p.id);
    }
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
    this.colSer.updateCollection(this.collection).subscribe(() => this.router.navigateByUrl('/admin/collection-list'));
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

  getName(id) {
    return this.allProducts.find(p => p.id === id).name;
  }

  getType(id) {
    return this.allProducts.find(p => p.id === id).type;
  }

  getPrice(id) {
    return this.allProducts.find(p => p.id === id).price;
  }

  remove(id) {
    this.collection.products = this.collection.products.filter(p => p.id !== id);
    this.alreadyAdded = this.alreadyAdded.filter(num => num !== id);
  }

}
