import {Component, NgZone, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {
  cartItems: number;
  constructor(private productService: ProductService, private router: Router) {}

    ngOnInit() {
    this.cartItems = 2;
  }
  setFilter(specification: string, routeTail: string) {
    this.productService.setFilter(specification);
    this.router.navigateByUrl('products' + routeTail);
  }
}
