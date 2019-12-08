import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../shared/services/authentication-service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  constructor(private authServ: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  logout() {
    this.authServ.logout();
    this.router.navigateByUrl('/login');
  }
}
