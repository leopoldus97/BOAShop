import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user-service/user.service';
import {Router} from '@angular/router';
import {first} from "rxjs/operators";
import {User} from '../../shared/models/user';
import {ValidatorHelper} from '../../shared/models/validatorHelper';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  public validator: ValidatorHelper;
  constructor(private formBuilder: FormBuilder, private userServ: UserService, private router: Router) { }

    ngOnInit() {
      this.validator = {
        email: '',
        password: '',
        confirmPassword: ''
      };
    }

  save(f: ValidatorHelper, isValid: boolean) {
    console.log('dziala');
  }
}
