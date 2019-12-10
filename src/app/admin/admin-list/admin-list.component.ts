import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product-service/product.service';
import {Product} from '../../shared/models/product';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  allProducts: Product[];

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getProducts().subscribe(listOfProducts => this.allProducts = listOfProducts);
    document.getElementById('btn-all-products').setAttribute('style',
      'background-color:#000000; color: white; width:200px');
    document.getElementById('btn-add-product').setAttribute('style', '');
    document.getElementById('btn-new-collection').setAttribute('style', '');
    document.getElementById('btn-collection-list').setAttribute('style', '');
  }

}
