import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product-service/product.service';
import {User} from '../../shared/models/user';
import {AuthenticationService} from '../../shared/services/authentication-service/authentication.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  currentUser: User;

  constructor(private productService: ProductService, private authService: AuthenticationService) { }


  ngOnInit() {
  this.productService.resetFilterToDefault();
  this.authService.currentUser.subscribe(u => this.currentUser = u);
  }



}
