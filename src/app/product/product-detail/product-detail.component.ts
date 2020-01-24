import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../shared/services/product-service/product.service';
import {Product} from '../../shared/models/product';
import {ProductQuantity} from '../../shared/models/productQuantity';
import {CartService} from '../../shared/services/cart-service/cart.service';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {ModalComponent} from '../../shared/modal/modal.component';
import {SizeQuantity} from '../../shared/models/sizeQuantity';
import {debug} from "util";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  productQuantity: ProductQuantity = {id: 1, quantity: 1, product: null, size: 'M', sum: 0 };
  modalRef: MDBModalRef;
  suspect: SizeQuantity = {id: 1, size: 'M', quantity: 1};
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ProductService,
              private cartService: CartService,
              private modalService: MDBModalService) { }

  ngOnInit() {
    this.getProductByID();
  }
  getProductByID() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getProductByID(id).subscribe(product => this.product = product);
  }
  addToCart() {
    if (this.productQuantity.quantity > 0 && this.productQuantity.quantity <= 100) {
      this.productQuantity.id = this.cartService.availableID();
      this.productQuantity.product = this.product;
      // This updates available quantity of a product in DB
      // this.updateQuantityInDB();
      // This updates available quantity of a product in DB
      this.productQuantity.sum = this.formatSum(this.productQuantity.quantity * this.product.price);
      this.cartService.addProduct(this.productQuantity);
      this.setDefault(this.productQuantity.size);
    } else {
      // To-Do Popup with information that wrong input was  provided
      this.productQuantity.quantity = 1;
    }
    this.openModal();
  }
/*
  private updateQuantityInDB() {
    const productDB = this.product.sizeQuantity.find( sq => sq.size === this.productQuantity.size);
    //
    const availableQuantity = productDB.quantity;
    if (availableQuantity < this.productQuantity.quantity) {
      this.productQuantity.quantity = availableQuantity;
      this.cartService.quantityExceeded = true;
      this.cartService.sizeExceeded = this.productQuantity.size;
    }
    this.suspect = this.product.sizeQuantity.find( sq => sq.size === this.productQuantity.size);
    this.product.sizeQuantity.find( sq => sq.size === this.productQuantity.size).quantity -= this.productQuantity.quantity;
    this.service.updateProduct(this.product).subscribe( () => {
      this.getProductByID();
      this.router.navigateByUrl('products');
    });
  } */
  setSize(size: string) {
    this.productQuantity.size = size;
  }
  setDefault(Size: string) {
    this.productQuantity = {id: 1, quantity: 1, product: null, size: Size, sum: 0 };
  }
  openModal() {
    this.modalRef = this.modalService.show(ModalComponent);
  }
  formatSum(i: number): number {
    return Math.round(i * 100) / 100;
  }
  setFilter(specification: string, routeTail: string, properType: string) {
    this.service.setFilter(specification, properType);
    this.router.navigateByUrl('products' + routeTail);
  }
  quantityValid(size: string): boolean {
    if (this.product !== undefined) {
      return this.product.sizeQuantity.find(sq => sq.size === size).quantity > 0;
    } else { return false; }
  }
}
