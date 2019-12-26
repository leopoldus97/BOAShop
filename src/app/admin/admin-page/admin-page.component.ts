import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product-service/product.service';
import {AuthenticationService} from '../../shared/services/authentication-service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private productService: ProductService, private authServ: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if (this.authServ.currentUserValue.isAdmin === false) {
      this.router.navigateByUrl('/login');
    }
    this.productService.resetFilterToDefault();
  }



}
