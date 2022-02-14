import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  registerForm = this.fb.group({
    userName: [
      '',
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required, Validators.maxLength(6)],
    phone: ['', Validators.required, Validators.maxLength(11)],
    address: this.fb.group({
      city: [''],
      state: [''],
    }),
  });
  ngOnInit(): void {}
  getErrors(field: string) {
    return this.registerForm.get(field)?.errors;
  }
  getField(field: string) {
    return this.registerForm.get(field);
  }
}
