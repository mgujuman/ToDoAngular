import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
 
@Injectable()
export class RegistrationService {
    constructor(private http: HttpClient){
    }
     
    registration(user: User){
        console.log(`${user.email}, ${user.password}`)
        return this.http.post('/api/signup',{
            email : user.email,
            password : user.password
        })
    }
 
}