import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../interface/login.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  URL:string = 'http://localhost:3000/api/v1/auth/login  '

  login(userData:UserLogin):any
  {
    return this.http.post(this.URL,userData)
  }
}
