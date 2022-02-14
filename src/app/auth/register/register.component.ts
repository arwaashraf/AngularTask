import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm = this.fb.group({
    name:[''],
    email:[''],
    password:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
   })
});
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
