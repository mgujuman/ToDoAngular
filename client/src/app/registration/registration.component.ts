import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService],
})
export class RegistrationComponent {

  public user : User;

  constructor(private registrationService: RegistrationService) {
      this.user = new User();
  }
  
  signUp(){
    console.log("11111");
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(this.user.email)){
      if (this.user.password === this.user.password2){
        this.registrationService.registration(this.user).subscribe(result => {
         console.log('result is ', result);
       });
     };
    };
  }

}
