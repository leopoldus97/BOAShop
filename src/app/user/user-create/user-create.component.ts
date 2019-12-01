import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  email: string;
  password: string;
  constructor() { }

  ngOnInit() {
  }
  isFilled() {
    if (this.password.length < 1) {
      document.getElementById('error').style.display = 'block';
    } else if (this.password.length > 0) {
      document.getElementById('error').style.display = 'none';
    }
  }

}
