import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserData, UserLogin } from './interface/login.model';
import { LoginService } from './loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder , private loginService : LoginService) { }
  userToken :string = ''
  userDetails:UserData ={name:'',userId:'',role:''}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })
  ngOnInit(): void {
  }
  getErrors(field: string) {
    return this.loginForm.get(field)?.errors;
  }
  getField(field: string) {
    return this.loginForm.get(field);
  }
  onLogin()
  {
    this.loginService.login(this.loginForm.value).subscribe({
      next:(userData:UserLogin)=>{
        this.userDetails =Object.values(userData)[0]
        this.userToken = Object.values(userData)[1]
        console.log(this.userDetails.userId  )
        console.log(this.userToken)
        },
      error:(err:any)=> {console.log(err.error.msg)}
      
    })
  }
}
