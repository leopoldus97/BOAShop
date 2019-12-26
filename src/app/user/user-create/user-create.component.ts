import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user-service/user.service';
import {Router} from '@angular/router';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userServ: UserService, private router: Router) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  get f() { return this.registrationForm.controls; }
  onSubmit() {
    if (this.f.email.value === '') {
      this.displayError('emailError');
    }
    if (this.f.password.value === '') {
      this.displayError('pwError');
    }
    if (this.f.confirmPassword.value === '') {
      this.displayError('confpwError');
      return;
    }
    if (this.f.password.value !== this.f.confirmPassword.value) {
      return;
    }
    this.userServ.createUser(this.f.email.value, this.f.password.value).subscribe();
    this.router.navigateByUrl('/');

  }
  displayError(id: string) {
    document.getElementById(id).style.display = 'block';
  }
  hideError(id: string) {
    document.getElementById(id).style.display = 'none';
  }
  goBack() {
    this.router.navigateByUrl('/login');
  }

}
