import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product-service/product.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  this.productService.resetFilterToDefault();
  }



}
