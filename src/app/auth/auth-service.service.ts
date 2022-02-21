import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUserForm } from './shared resoorces/register.model';
import { UserLogin } from '../auth/login/interface/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  URL:string = 'http://localhost:3000/api/v1/auth/register'

  register (registerInfo:RegisterUserForm){
    return this.http.post(this.URL,registerInfo)
  }
  
  loginURL:string = 'http://localhost:3000/api/v1/auth/login  '

  login(userData:UserLogin):any
  {
    return this.http.post(this.loginURL,userData)
  }
}
