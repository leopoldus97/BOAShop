import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../shared/services/authentication-service/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../shared/models/user';
import {UserService} from '../../shared/services/user-service/user.service';
import {Order} from '../../shared/models/order';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  password: string;
  confirmPassword: string;
  currentUser: User;
  userOrders: Order[];
  isEmailEditable = false;
  constructor(private formBuilder: FormBuilder,
              private authServ: AuthenticationService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    const id = this.authServ.currentUserValue.id;
    this.userService.getUser(id).subscribe(u => this.currentUser = u );
    this.userOrders = this.currentUser.orders;
  }
  logout() {
    this.authServ.logout();
    this.router.navigateByUrl('/login');
  }
  onSubmit() {
    if (this.currentUser.email === '') {
      return;
    }
    if (this.password === '') {
      return;
    }
    if (this.confirmPassword !== this.password) {
      return;
    }
    this.currentUser = {
      email: this.currentUser.email,
      address: {
        country: this.currentUser.address.country,
        city: this.currentUser.address.city,
        street: this.currentUser.address.street,
        zipCode: this.currentUser.address.zipCode
      }
    };
    this.userService.updateUser(this.currentUser).pipe(first()).subscribe( () => {
      this.router.navigateByUrl('/login');
    });
  }
  editEmail() {
    if (this.isEmailEditable === false) {
      document.getElementById('emailField').style.pointerEvents = 'inherit';
      this.isEmailEditable = true;
    } else {
      document.getElementById('emailField').style.pointerEvents = 'none';
      this.isEmailEditable = false;
    }
  }
}
