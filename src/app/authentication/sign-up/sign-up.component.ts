import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { response } from 'express';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  registerForm: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder, private route:Router) {
    this.registerForm = this.fb.group({
      ho_ten: ['', [Validators.required, this.nameValidator]],
      email: ['', [Validators.required, Validators.email]],
      so_dien_thoai: ['', [Validators.required, Validators.pattern('^\\d{10,15}$')]],
    });
  }

  // Custom validator để kiểm tra họ tên
nameValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value || /^[^0-9]*$/.test(value)) {
    return null; // hợp lệ nếu không chứa số
  }
  return { invalidName: 'Họ tên không hợp lệ' };
}

  onSubmit() {
    if (this.registerForm.valid) {  // Kiểm tra nếu form hợp lệ
      const data = {
        ...this.registerForm.value,
        vai_tro: 'quan tri',
        luong: 2000000
      };
  
      axios.post('http://127.0.0.1:8000/api/tai_khoan_khach_hang/signup', data)
        .then(response => {
          this.successMessage = response.data.message;
          this.registerForm.reset();
          this.route.navigate(['/login'])
        })
        .catch(error => {
          console.error('Đăng ký thất bại', error);
          this.successMessage = error.response.data.message;
        });
    } else {
      this.successMessage = 'Vui lòng điền đầy đủ thông tin!';
    }
  }
}
