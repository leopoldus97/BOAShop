import { Component } from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {

  constructor(public modalRef: MDBModalRef, private router: Router) {}
  goToBasket() {
    this.router.navigateByUrl('/cart');
    this.modalRef.hide();
  }
}
