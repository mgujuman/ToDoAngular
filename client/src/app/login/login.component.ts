import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../models/user.model';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent {
 
  public user : User;
 
  constructor(private loginService: LoginService) {
      this.user = new User();
  }
 
  validateLogin() {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(this.user.email)){
      if(this.user.email && this.user.password) {
         this.loginService.validateLogin(this.user).subscribe(result => {
          console.log('result is ', result);
        }, error => {
          console.log('error is ', error);
        });
      };
    };
  }

 
}