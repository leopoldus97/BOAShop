import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';
import {Product} from '../../shared/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ProductService) { }

  ngOnInit() {
    this.getProductByID();
  }
  getProductByID() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getProductByID(id).subscribe(product => this.product = product);
  }
}
