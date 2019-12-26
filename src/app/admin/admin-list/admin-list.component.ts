import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product-service/product.service';
import {Product} from '../../shared/models/product';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  allProducts: Product[] = [];
  idSort = '';
  nameSort = '';
  typeSort = '';
  priceSort = '';
  currentPage = 1;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.getProducts();
    document.getElementById('btn-all-products').setAttribute('style',
      'background-color:#000000; color: white; width:200px');
    document.getElementById('btn-add-product').setAttribute('style', '');
    document.getElementById('btn-new-collection').setAttribute('style', '');
    document.getElementById('btn-collection-list').setAttribute('style', '');
  }

  sortID() {
    if (this.idSort === '' || this.idSort === '▼') {
      this.service.setFilter('order=IDAsc', '');
      this.idSort = '▲';
    } else if (this.idSort === '▲') {
      this.service.setFilter('order=IDDsc', '');
      this.idSort = '▼';
    }
    this.nameSort = '';
    this.priceSort = '';
    this.typeSort = '';
    this.getProducts();
  }

  sortName() {
    if (this.nameSort === '' || this.nameSort === '▼') {
      this.service.setFilter('order=nameAsc', '');
      this.nameSort = '▲';
    } else if (this.nameSort === '▲') {
      this.service.setFilter('order=nameDsc', '');
      this.nameSort = '▼';
    }
    this.idSort = '';
    this.priceSort = '';
    this.typeSort = '';
    this.getProducts();
  }

  sortType() {
    if (this.typeSort === '' || this.typeSort === '▼') {
      this.service.setFilter('order=typeAsc', '');
      this.typeSort = '▲';
    } else if (this.typeSort === '▲') {
      this.service.setFilter('order=typeDsc', '');
      this.typeSort = '▼';
    }
    this.idSort = '';
    this.priceSort = '';
    this.nameSort = '';
    this.getProducts();
  }

  sortPrice() {
    if (this.priceSort === '' || this.priceSort === '▼') {
      this.service.setFilter('order=priceAsc', '');
      this.priceSort = '▲';
    } else if (this.priceSort === '▲') {
      this.service.setFilter('order=priceDsc', '');
      this.priceSort = '▼';
    }
    this.idSort = '';
    this.nameSort = '';
    this.typeSort = '';
    this.getProducts();
  }

  getProducts() {
    this.service.getProducts().subscribe(listOfProducts => this.allProducts = listOfProducts, () => this.allProducts = null);
  }

  changePage(page: number) {
    this.currentPage += page;
    this.service.setPaging(this.currentPage);
    this.getProducts();
  }

}
