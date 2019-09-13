import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
 
@Injectable()
export class LoginService {
 
    constructor(private http: HttpClient){
 
    }
     
    validateLogin(user: User){
        console.log(`${user.email}, ${user.password}`)
        return this.http.post('/api/login',{
            email : user.email,
            password : user.password
        })
    }
 
}