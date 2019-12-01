import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../shared/models/product';
// import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.scss']
})
export class AdminDetailsComponent implements OnInit {

  product: Product;

  /*productForm = this.fb.group({
    name: [''],
    type: [''],
    gender: [''],
    price: [''],
    sizeQuantity: [''],
    discountPrice: [''],
    collection: [''],
    description: [''],
    pictures: ['']
  });*/

  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    // private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getProductByID();
  }

  getProductByID() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getProductByID(id).subscribe(product => { this.product = product; });
  }

  show() {
    /*this.productForm.patchValue({
      name: this.product.name,
      type: this.product.type,
      gender: this.product.gender,
      price: this.product.price,
      sizeQuantity: this.product.sizeQuantity,
      discountPrice: this.product.discountPrice,
      collection: this.product.collection,
      description: this.product.description,
      pictures: this.product.pictures
    });*/
  }
}
