import { Component } from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {Router} from '@angular/router';
import {CartService} from '../services/cart-service/cart.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {

  constructor(public modalRef: MDBModalRef, private router: Router, private cartService: CartService) {}
  goToBasket() {
    this.router.navigateByUrl('/cart');
    this.modalRef.hide();
    this.cleanVariables();
  }

  hide() {
    this.modalRef.hide();
    this.cleanVariables();
  }
  cleanVariables() {
    this.cartService.sizeExceeded = null;
    this.cartService.quantityExceeded = false;
  }
}
